import { IsArray,
         IsIn,
         IsInt,
         IsNumber,
         IsOptional,
         IsPositive,
         IsString,
         MinLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['hombre', 'mujer', 'unisex', 'consumo'])
    gender: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags: string[];

    //*Imágenes
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];

    @IsString()
    @MinLength(1)
    @IsOptional()
    status: string;

}
