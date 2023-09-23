import { RoomImage } from '../entities/room.image.entity';
import { Theme } from '../entities/theme.entity';
import { IsArray, IsIn,
         IsNumber,
         IsOptional,
         IsPositive,
         IsString,
         MinLength } from "class-validator";

export class CreateRoomDto {

    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsIn(['Hotel', 'Motel'])
    type: string;

    //*Imágenes
    @IsArray()
    @IsOptional()
    gallery?: RoomImage[];

    @IsString()
    @MinLength(1)
    @IsOptional()
    status: string;

    @IsString()
    @IsOptional()
    themeId: string;

}
