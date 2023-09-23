import { BeforeInsert,
         BeforeUpdate,
         Column,
         Entity,
         OneToMany,
         PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from './product-image.entity';

@Entity({
    name: "TPR_PRODUCTOS"
})
export class Product {

    @PrimaryGeneratedColumn('uuid', {
        name: "TPR_ID"
    })
    id: string;

    @Column({
        name: "TPR_TITULO",
        type: 'varchar',
        unique: true,
        length: 150,
        comment: 'Título del producto'
    })
    public title: string;

    @Column({
        name: "TPR_DESCRIPCION",
        type: 'varchar',
        length: 600,
        nullable: true,
        comment: 'Descripción del producto'
    })
    public description: string;

    @Column({
        name: "TPR_PRECIO",
        type: 'bigint',
        comment: 'Precio del producto',
        default: 0
    })
    public price: number;

    @Column({
        name: "TPR_STOCK",
        type: 'int',
        comment: 'Stock del producto',
        default: 0
    })
    public stock: number;

    @Column({
        name: "TPR_SLUG",
        type: 'varchar',
        unique: true,
        length: 300,
        comment: 'Slug del producto'
    })
    public slug: string;

    @Column({
        name: "TPR_TAMAÑOS",
        type: 'text',
        array: true,
        comment: 'Tamaños del producto',
        default: []
    })
    public sizes: string[]

    @Column({
        name: "TPR_GENERO",
        type: 'varchar',
        length: 15,
        comment: 'Género del producto'
    })
    public gender: string;

    @Column({
        name: "TPR_TAGS",
        type: 'text',
        array: true,
        comment: 'Tags del producto',
        default: []
    })
    public tags: string[];

    @Column({
        name: "TPR_ESTADO",
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico del producto',
        default: 'S'
    })
    public status: string;

    @Column({
        name: "TPR_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creo'
    })
    public createUserAt: string;

    @Column({
        name: "TPR_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    public createDateAt: Date;

    @Column({
        name: "TPR_USUARIO_ACTUALIZACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creo'
    })
    public updateUserAt: string;

    @Column({
        name: "TPR_FECHA_ACTUALIZACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    public updateDateAt: Date;

    //* Relación, elemento tipo ProductImage
    @OneToMany(
        () => ProductImage,
        ( productImage ) => productImage.product,
        { cascade: true , eager: true } //Con el eager habilitado cada vez que se usa find se cargan sus relaciones automáticamente
    )
    public images?: ProductImage[];

    @BeforeInsert()
    checkSlug(){

        if( !this.slug ){
            this.slug = this.title;
        }

        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    }

    @BeforeUpdate()
    checkSlugUpdate() {
        if( !this.slug ){
            this.slug = this.title;
        }

        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }



}
