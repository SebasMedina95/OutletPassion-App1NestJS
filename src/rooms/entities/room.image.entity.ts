import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from './room.entity';


@Entity()
export class RoomImage{

    @PrimaryGeneratedColumn('uuid')
    public id: number;

    @Column({
        type: 'text',
        comment: 'Url de la imagen del cuarto.'
    })
    public url: string;

    @Column({
        type: 'varchar',
        length: 1,
        comment: 'Estado modelado del producto',
        default: 'S'
    })
    public model: string;

    @Column({
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico del cuarto',
        default: 'S'
    })
    public status: string;

    @Column({
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    public createDateAt: Date;

    //* Relación, elemento tipo Room
    @ManyToOne(
        () => Room,
        ( room ) => room.gallery
    )
    public room: Room

}
