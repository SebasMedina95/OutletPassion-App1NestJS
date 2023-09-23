import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from './room.entity';

@Entity()
export class Theme {

    @PrimaryGeneratedColumn('uuid') //Que no sea números autoincrementales sino UUID's :3 !
    id: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 150,
        comment: 'Temática de la habitación'
    })
    public name: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 150,
        nullable: true,
        comment: 'Descripción de la temática de la habitación'
    })
    public description: string;

    @Column({
        type: 'timestamp',
        comment: 'Fecha creación'
    })
    public createDateAt: Date;

    //* Relación, elemento tipo ProductImage
    @OneToMany(
        () => Room,
        ( room ) => room.themeId,
        { cascade: true }
    )
    public room?: Room;

}
