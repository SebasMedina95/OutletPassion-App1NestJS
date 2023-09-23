import { Controller,
         Post,
         Body,
         Patch,
         Param,
         Delete,
         UploadedFile,
         UseInterceptors,
         BadRequestException,
         ParseFilePipe,
         MaxFileSizeValidator,
         FileTypeValidator,
         ParseFilePipeBuilder,
         HttpStatus, 
         Get,
         Res} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';

import { FilesService } from './files.service';

import { myFileFilter } from './helpers/fileFilter';
import { myFileNamer } from './helpers/fileNamer';

@Controller('files')
export class FilesController {
  
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService
  ) {}

  @Get('products/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string
  ){

    const path = this.filesService.getStaticProductImage( imageName )
    res.sendFile(path);

    return path;
  }


  @Post('products')
  @UseInterceptors( FileInterceptor('myChangeFile', {
    fileFilter: myFileFilter,
    storage: diskStorage({
      destination: './static/uploads/products',
      filename: myFileNamer
    })
  }))
  uploadProductImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: '.(png|jpeg|jpg)',
        })
        .addMaxSizeValidator({
          maxSize: 2000000
        })
        .build({
          errorHttpStatusCode: HttpStatus.BAD_REQUEST
        }),
    ) file: Express.Multer.File,
  ){

    if( !file ){

      throw new BadRequestException('No se encontró una imagen ...')

    }

    const secureUrl = `${ this.configService.get('HOST_API') }/files/products/${file.filename}`;

    return {
      secureUrl
    };
  }

}
