import { createParamDecorator,
         ExecutionContext,
         InternalServerErrorException } from '@nestjs/common';

export const MyGetUserDecorator = createParamDecorator(
    ( data , ctx: ExecutionContext ) => {

        const req = ctx.switchToHttp().getRequest();
        const user = req.user;

        if( !user ) throw new InternalServerErrorException('El usuario no fue encontrado (request)');

        return user;
    }
);

export const MyGetUserFieldDecorator = createParamDecorator(
    ( data: string , ctx: ExecutionContext ) => {

        const req = ctx.switchToHttp().getRequest();
        const user = req.user;

        if( !user ) throw new InternalServerErrorException('El usuario no fue encontrado (request)');

        return ( !data ) ? user : user[data];
    }
);

