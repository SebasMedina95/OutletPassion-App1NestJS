import { Column,
         Entity,
         ManyToOne,
         PrimaryGeneratedColumn } from "typeorm";
import { Product } from './product.entity';

@Entity({
    name: "TPI_IMAGENES_PRODUCTOS"
})
export class ProductImage{

    @PrimaryGeneratedColumn('uuid', {
        name: "ID"
    })
    public id: number;

    @Column({
        name: "TPI_URL_IMAGEN",
        type: 'text',
        comment: 'Url de la imagen del producto.'
    })
    public url: string;

    @Column({
        name: "TPI_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    public createDateAt: string;

    //* Relación, elemento tipo Product
    @ManyToOne(
        () => Product,
        ( product ) => product.images,
        { onDelete : 'CASCADE' }
    )
    public product: Product

}
