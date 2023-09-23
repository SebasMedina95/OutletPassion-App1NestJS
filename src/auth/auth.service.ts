import { Injectable, 
         BadRequestException,
         InternalServerErrorException,
         UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { IJwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}

  async create(createUserDto: CreateUserDto) {
    
    try {
      
      const { password, ...userDate } = createUserDto;
      const user = this.userRepository.create({
        ...userDate,
        password: bcrypt.hashSync( password, 10 )
      });
      await this.userRepository.save(user);

      return {
        ...user,
        token: this.getJwtToken({ 
          id: user.id,
          createAt: new Date() 
        })
      }

    } catch (error) {

      console.log(error);
      this.handleDBErrors(error);

    }
    
  }

  async login ( loginUserDto: LoginUserDto ){

    try {

      const { password, email } = loginUserDto;

      const user = await this.userRepository.findOne({
        where: { email },
        select: { id: true, password: true }
      });

      if( !user ){
        return new UnauthorizedException( "Credenciales no son válidas (email)" );
      }

      if( !bcrypt.compareSync(password, user.password) ){
        return new UnauthorizedException( "Credenciales no son válidas (password)" );
      }

      return {
        ...user,
        token: this.getJwtToken({ 
          id: user.id,
          createAt: new Date() 
        })
      }
      
    } catch (error) {
      
      this.handleDBErrors(error);

    }

  }


  private getJwtToken( payload: IJwtPayload ){

    const token = this.jwtService.sign( payload );
    return token;

  }

  private handleDBErrors( error: any ): never {

    if( error.code === '23505' ){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Por favor revisar el log ...');

  }

  
}
