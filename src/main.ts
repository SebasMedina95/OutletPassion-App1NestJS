import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  //Creación de la aplicación
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap')

  //Prefix de inicio de la aplicación
  app.setGlobalPrefix('api/v1');

  //Configuración de Pipes Globales
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  //Habilitamos el cors
  app.enableCors();

  //Configuración de puerto
  await app.listen( process.env.PORT );
  logger.log(`La APP está corriendo en puerto ${process.env.PORT}`);
}
bootstrap();
