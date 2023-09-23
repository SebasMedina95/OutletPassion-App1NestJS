import { Injectable, Logger, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomImage } from './entities/room.image.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class RoomsService {

  private readonly logger = new Logger('RoomsService')

  constructor(

    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(RoomImage)
    private readonly roomImageRepository: Repository<RoomImage>

  ){}

  //? CREAR CUARTO
  async create(createRoomDto: CreateRoomDto) {
    
    try {

      const { gallery = [], ...roomDetails } = createRoomDto;

      console.log(roomDetails);

      const roomSave = this.roomRepository.create({
        ...roomDetails,
        gallery : gallery.map( exp => this.roomImageRepository.create({
          url : exp.url,
          model : exp.model,
          status : exp.status
        }))
      });

      await this.roomRepository.save( roomSave );
      return { ...roomSave };

    } catch (error) {

      this.handleDbExceptions(error);

    }

  }

  async findAll( paginationDto: PaginationDto ) {
    
    const { limit = 10, offset = 1 } = paginationDto;

    const [items, totalCount] = await this.roomRepository.findAndCount({
      take: limit,
      skip: limit * (offset - 1),
      order: {
        name : 'ASC'
      },
      //Relaciones ["themeId", "gallery"]
      relations: ["themeId", "gallery"],
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        slug: true,
        type: true,
        status: true,
        gallery: {
          id: true,
          url: true,
          model: true
        }
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

  findOne(id: string) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }

  //* ERROR GENÉRICO !
  private handleDbExceptions( error: any ) {

    if( error.code === '23505' ) throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Error no controlado, por favor consulte el LOG para obtener más información.');

  }

}
