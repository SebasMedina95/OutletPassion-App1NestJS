
export const myFileFilter = ( req: Express.Request , file: Express.Multer.File , callback: Function ) => {

    // console.log({ file });
    if( !file ) return callback( new Error('El archivo es vacío'), false );

    const fileExtension = file.mimetype.split('/')[1];
    const validExtension = ['jpg', 'jpeg', 'png', 'gif'];

    console.log(file);

    if( validExtension.includes( fileExtension ) ){

        return callback( null, true );

    }else{

        return callback( null , false );

    }

    callback(null, false);

}
