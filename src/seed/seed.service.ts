import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/products.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly productService: ProductsService
  ){}
 
  async runSeed() {

    await this.insertNewProducts();
    return 'SEED EXECUTE';

  }

  private async insertNewProducts() {

    await this.productService.deleteAllProducts();

    const productsSeed = initialData.products;
    const insertPromises = [];

    productsSeed.forEach( p => {
      insertPromises.push( this.productService.create(p) );
    });

    await Promise.all( insertPromises );

    return true;

  }
  
}
