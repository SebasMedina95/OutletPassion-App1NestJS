import { Controller,
         Get,
         Post,
         Body,
         UseGuards, 
         Req,
         SetMetadata} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { MyGetUserDecorator, 
         MyGetUserFieldDecorator } from './decorators/get-user.decorator';
import { MyGetRawHeadersDecorator } from './decorators/raw-headers.decorator';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }


  @Get('private')
  @UseGuards( AuthGuard() )
  testingPrivateRoute(
    // @Req() request: Express.Request
    @MyGetUserDecorator() user: User,
    @MyGetUserFieldDecorator('email') email: string,
    @MyGetRawHeadersDecorator() rawHeaders: string[]
  ){

    // console.log({user});
    // console.log({ user: request.user });

    return {
      status: "Ok",
      message: "Hola mundo desde Private Method",
      user,
      email,
      rawHeaders
    }

  }

  @Get('private2')
  @RoleProtected( ValidRoles.superUser, ValidRoles.admin )
  // @SetMetadata('roles', ['admin','super-admin'])
  @UseGuards( AuthGuard(), UserRoleGuard )
  testingPrivateRoute2(
    @MyGetUserDecorator() user: User,
  ){


    return {
      ok : true,
      user
    }

  }


  @Get('private3')
  @Auth( ValidRoles.admin )
  testingPrivateRoute3(
    @MyGetUserDecorator() user: User,
  ){


    return {
      ok : true,
      user
    }

  }
  
}
