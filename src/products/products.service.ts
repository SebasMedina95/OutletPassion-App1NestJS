import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { validate as isUUID } from 'uuid';
import { ProductImage } from './entities/product-image.entity';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService')

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    private readonly dataSource: DataSource,

  ){}

  //? CREAR PRODUCTO
  async create(createProductDto: CreateProductDto) {

    try {

      const { images = [], ...productDetails } = createProductDto;

      const product = this.productRepository.create({
        ...productDetails,
        images: images.map( img => this.productImageRepository.create({url : img}))
      });

      await this.productRepository.save( product );
      return { ...product, images };

    } catch (error) {

      this.handleDbExceptions(error);

    }

  }

  //? MOSTRAR TODOS LOS PRODUCTOS
  async findAll( paginationDto: PaginationDto ) {

    const { limit = 10, offset = 1 } = paginationDto;

    const [items, totalCount] = await this.productRepository.findAndCount({
      take: limit,
      skip: limit * (offset - 1),
      //Relaciones
      order: {
        title : 'ASC'
      },
      relations: {
        images : true
      }
    });

    const totalPages: number = Math.ceil(totalCount / (limit));

    return {
      items,
      page: offset,
      perPage: limit,
      totalData: totalCount,
      totalPages : totalPages
    };

  }

  async findOne(termino: string) {

    let product: Product[] | Product;

    if( isUUID(termino) ){

      //Nos va traer las relaciones porque en el Entity le tenemos configurado el Eager.
      product = await this.productRepository.findOneBy({ id : termino });

    }else{

      const queryBuilder = this.productRepository.createQueryBuilder('myProduct');
      product = await queryBuilder
                  .where('UPPER(title) LIKE :title or slug LIKE :slug', {
                    title: '%' + termino.toUpperCase() + '%',
                    slug : '%' + termino.toLowerCase() + '%'
                  })
                  .leftJoinAndSelect('myProduct.images', 'myProductImages')
                  .getMany();

    }

    if(!product) throw new NotFoundException("No fue encontrada información ni con ID, ni Title ni Slug");

    return product;

  }

  //? ACTUALIZAR PRODUCTO
  async update(id: string, updateProductDto: UpdateProductDto) {

    const { images, ...toUpdate } = updateProductDto;

    const product = await this.productRepository.preload({ id, ...toUpdate });

    if ( !product ) throw new NotFoundException(`No se encontro el producto con ID: ${id}`);

    //Create QueryRunner
    //Empezamos a definir una serie pasos ...
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    
    try {

      //Borrar las que ya tenemos
      if(images) {

        await queryRunner.manager.delete( ProductImage, { product : { id } } );
        product.images = images.map(image => this.productImageRepository.create({ url : image }))

      }else{

        product.images = await this.productImageRepository.findBy({ product : {id} })

      }

      await queryRunner.manager.save( product );
      await queryRunner.commitTransaction();
      await queryRunner.release();
      
      return product;

    } catch (error) {
      
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDbExceptions(error);

    }

  }

  //? ELIMINAR PRODUCTO
  async remove(id: string) {

    // let productById: Product;
    const productById = await this.productRepository.findOneBy({ id });

    if(!productById) throw new NotFoundException("No fue encontrada información ese ID");

    await this.productRepository.remove( productById );
    return productById;

  }

  //? HABILITAR / INHABILITAR PRODUCTO
  async changeStatus(id: string, state: string) {

    const product = await this.productRepository.preload({
      id : id,
      status : state
    });

    if ( !product ) throw new NotFoundException(`No se encontro el producto con ID: ${id}`);
    
    try {
      
      await this.productRepository.save( product );
      return product;

    } catch (error) {
      
      this.handleDbExceptions(error);

    }

  }

  //? MÉTODO DESTRUCTIVO, ELIMINAR ABSOLUTAMENTE TODOS LOS PRODUCTOS !!
  //! -> Para el tema de las semillas ! :D 
  async deleteAllProducts(){

    const query = this.productRepository.createQueryBuilder('product');

    try {
      
      return await query
        .delete()
        .where({})
        .execute()

    } catch (error) {
      
      this.handleDbExceptions(error);

    }

  }

  //* ERROR GENÉRICO !
  private handleDbExceptions( error: any ) {

    if( error.code === '23505' ) throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Error no controlado, por favor consulte el LOG para obtener más información.');

  }

}
