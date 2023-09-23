import { Type } from "class-transformer";
import { IsNumber,
         IsOptional,
         IsPositive,
         Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Type( () => Number ) //EnableImplicitConversions: true
    limit?: number;


    @IsOptional()
    @Min(1)
    @Type( () => Number ) //EnableImplicitConversions: true
    offset?: number;

}