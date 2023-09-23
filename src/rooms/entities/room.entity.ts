import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Theme } from './theme.entity';
import { RoomImage } from './room.image.entity';

@Entity()
export class Room {

    @PrimaryGeneratedColumn('uuid') //Que no sea números autoincrementales sino UUID's :3 !
    id: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 150,
        comment: 'Título de la habitación'
    })
    public name: string;

    @Column({
        type: 'varchar',
        length: 1000,
        nullable: true,
        comment: 'Descripción de la habitación'
    })
    public description: string;

    @Column({
        type: 'bigint',
        comment: 'Precio de la habitación',
        default: 0
    })
    public price: number;

    @Column({
        type: 'varchar',
        unique: true,
        length: 300,
        comment: 'Slug de la habitación'
    })
    public slug: string;

    @Column({
        type: 'varchar',
        length: 50,
        comment: 'Tipo de la habitación'
    })
    public type: string;

    @Column({
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico de la habitación',
        default: 'S'
    })
    public status: string;

    @Column({
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    public createDateAt: Date;

    //* Relación, elemento tipo RoomImage
    @OneToMany(
        () => RoomImage,
        ( roomImage ) => roomImage.room,
        { cascade: true }
    )
    public gallery?: RoomImage[];

    //* Relación, elemento temática Room
    @ManyToOne(
        () => Theme,
        ( theme ) => theme.room
    )
    public themeId: string; //Le coloque así para que me deje guardar

}
