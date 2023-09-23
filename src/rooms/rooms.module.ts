import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';

import { Room } from './entities/room.entity';
import { Theme } from './entities/theme.entity';
import { RoomImage } from './entities/room.image.entity';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [
    TypeOrmModule.forFeature([ 
      Room,
      Theme,
      RoomImage
    ])
  ]
})
export class RoomsModule {}
