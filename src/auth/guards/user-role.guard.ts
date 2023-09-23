import { CanActivate,
         ExecutionContext,
         ForbiddenException,
         Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { META_ROLES } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    //Nombre de SetMetadata que usamos en el controlador auth.controller
    const validRoles: string[] = this.reflector.get(META_ROLES, context.getHandler());

    //Si no existe los roles váldios, es como si cualquiera pudiera entrar
    if( !validRoles ) return true;
    if( validRoles.length === 0 ) return true;

    //En el context tengo el usuario gracias al tema del JWT
    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if( !user ) throw new BadRequestException('El usuario no fue encontrado!.');

    for (const role of user.roles) {
      
      if( validRoles.includes( role ) ){
        return true
      }

    }

    throw new ForbiddenException(`El usuario ${user.fullName} no tiene los permisos requeridos para acceder a esta funcionalidad. Solo se permiten con roles: [${validRoles}] y el usuario actual solo tiene el/los roles: [${user.roles}]`);
  }
}
