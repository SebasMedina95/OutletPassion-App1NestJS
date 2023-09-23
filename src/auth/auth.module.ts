import { Module } from '@nestjs/common';
import { ConfigModule, 
         ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

//? ------------------------------------------------------------
//? https://docs.nestjs.com/recipes/passport#jwt-functionality
//? ------------------------------------------------------------

@Module({
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy
  ],
  imports: [
    //Configuración general
    ConfigModule,
    //Temas de base de datos
    TypeOrmModule.forFeature([ 
      User
    ]),

    //Para la autenticación
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: () => {

        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '2h'
          }
        }
        
      }
    })

  ],
  exports: [
    AuthService,
    TypeOrmModule,
    JwtStrategy,
    PassportModule,
    JwtModule
  ]
})
export class AuthModule {}
