import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete, 
         ParseUUIDPipe,
         Query} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.roomsService.findAll(paginationDto);
  }

  @Get(':termino')
  findOne(@Param('termino') termino: string) {
    return this.roomsService.findOne(termino);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.roomsService.remove(+id);
  }
}
