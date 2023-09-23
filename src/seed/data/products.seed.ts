interface SeedProduct {
    createDateAt: Date;
    createUserAt: string;
    updateDateAt: Date;
    updateUserAt: string;
    description: string;
    gender: string;
    images: string[];
    price: number;
    sizes: string[]
    slug: string;
    status: string;
    stock: number;
    tags: string[];
    title: string;
}

type ValidGender = 'hombre' | 'mujer' | 'unisex' | 'consumo';


interface SeedData {

    products: SeedProduct[];

}

export const initialData: SeedData = {

    products: [

        {
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            images: [
                'b27b4cc3-0384-4994-b273-e2dd0c36a7b8.jpg',
                '76779f41-204f-48fc-99a8-fc0ca65daa02.jpg',
                '40cdc066-3403-4815-9f70-0b660c657196.jpg',
                '0112f68e-863c-4c27-8941-7cc1f5c0e971.jpg'
            ],
            stock: 17,
            price: 34500,
            sizes: ['S1','S2','S3','S4','S5'],
            slug: "carola_pandum_sensitive",
            status: 'S',
            tags: ['tagA','tagB','tagC'],
            title: "Carola Pandum Sensitive",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
            images: [
                'c88071ea-b97e-470b-8679-e1fedc1deeb7.jpg',
                '221c3481-e127-4a70-af2e-a78ae8171020.jpg',
                '56606e5d-8619-4683-8f41-50bd09e36b2c.jpg',
                '9a17a560-201e-4b80-9d9b-4e02efc3c52d.jpg'
            ],
            stock: 15,
            price: 41200,
            sizes: ['S1'],
            slug: "cream_deluxer_suavingr",
            status: 'S',
            tags: ['tagW','tagX','tagY','tagZ'],
            title: "Cream Deluxer Suavin'gr",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            images: [
                'e3c348d9-a364-4718-9989-e161af3d5e3d.jpg',
                'dda84dcd-8f27-44ef-96ac-96ade8d73446.jpg',
                '62e01f23-516c-4de8-85b1-47f3b8bfeae6.jpg'
            ],
            stock: 5,
            price: 25600,
            sizes: ['S1','S2','S3'],
            slug: "frambuels_register_danuvios",
            status: 'S',
            tags: ['tagW','tagX','tagY','tagZ'],
            title: "Frambuels Register Danuvio's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images: [
                '5b1a0438-8965-43b3-99de-8197ee98df9e.jpg',
                '70764742-e5bf-4580-9b7b-8d2ea8e3d756.jpg',
                '258692c3-3213-44fc-a983-f7f99cc3aaa8.jpg',
                '375e41ad-f20b-48eb-a7b6-e9e945b241fb.jpg',
                '2bdc5f15-14fc-4b2a-b106-bcc4a2cf565a.jpg',
                '2289e865-eb8a-4fde-8a20-9e94d73ae9f0.jpg',
            ],
            stock: 11,
            price: 78900,
            sizes: ['S1','S2'],
            slug: "Dolly Sensual Plamadug'ew",
            status: 'S',
            tags: ['tagA','tagB'],
            title: "dolly_sensual_plamadugew",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
            images: [
                '91d97d0e-a106-403a-b5e8-881fd8badf90.jpg',
                '32bc504f-b0fe-470a-8b86-55e9b0b449f5.jpg',
                '5346c87c-ffa9-4bae-8bdd-9142a1497442.jpg'
            ],
            stock: 9,
            price: 134000,
            sizes: ['S1'],
            slug: "grant_buckanas_ron",
            status: 'S',
            tags: ['tagF','tagG','tagH','tagI','tagJ','tagK'],
            title: "Grant Buckana's Ron",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "In vel est at neque vestibulum venenatis. Fusce id tincidunt lacus. Nunc nec mi a massa imperdiet sollicitudin sed ac nunc. Morbi at felis facilisis, convallis dolor quis, lobortis ante. Cras efficitur augue erat, sit amet volutpat sapien rhoncus vel. Vestibulum in euismod enim, et efficitur nunc.",
            images: [
                '8f61cba6-6816-468f-ae79-612b87a9608e.jpg',
                'd7b4dad6-8319-4253-9290-d3ea7b911fbf.jpg',
                '6a4d92eb-c7eb-4419-89be-2308b799cd97.jpg'
            ],
            stock: 30,
            price: 25000,
            sizes: ['B1'],
            slug: "condoms_ultra_sensitive",
            status: 'S',
            tags: ['tagQQQ','tagPPP','tagRRR'],
            title: "Condom's Ultra Sensitive",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Ut pharetra, est id tempus sollicitudin, augue metus rhoncus ligula, vitae interdum elit elit quis quam. Sed rhoncus tincidunt sem sed imperdiet. Aliquam erat volutpat. Nulla sollicitudin felis ac felis ullamcorper aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            images: [
                '6afa4b26-6dbe-4c46-930c-df8003224792.jpg',
                'f3420edc-c7c7-43ab-9826-afcc00bc6224.jpg',
                '063d437f-dea4-4f6b-8979-68604d29ecb7.jpg',
                'f46db2ea-8884-48d0-9aef-27b89165dbe9.jpg',
                '3c4ede59-0bb1-4940-8741-109f57168d2c.jpg',
            ],
            stock: 9,
            price: 235000,
            sizes: ['S1'],
            slug: "lomby_vinus_paradises",
            status: 'S',
            tags: ['tagV'],
            title: "Lomby Vinus Paradise's",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                '5d9cfef9-13e0-4cf7-9b3d-9559a1da7630.jpg',
                '1df39687-153c-4f11-a1d7-b7bb66336b0c.jpg',
                '73b1634e-95b4-4af9-adca-2b28ed99ab9f.jpg',
                '34af076e-6fcf-46be-8ca4-9283e6e17df3.jpg'
            ],
            stock: 2,
            price: 195000,
            sizes: ['T1','T2','T3','T4'],
            slug: "look_policial_passions",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Look Policial Passion's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                'a7239a22-16db-4415-8f90-ad32e6ae6da9.jpg',
                'c9fd349c-9fdd-4fa9-a95f-1e2364ffaedb.jpg',
                'e9d43fb4-ac83-409e-a33e-fd7e7df97f70.jpg',
                'd86040ee-564c-4954-bf56-bdb0216e2b0c.jpg'
            ],
            stock: 2,
            price: 195000,
            sizes: ['T1','T2','T3','T4'],
            slug: "look_nurses_passions",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Look Nurse's Passion's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                'afb99e56-ec23-4398-9f21-1af4d6907bbe.jpg',
                'e6647a0c-3627-4255-8eec-e75b0458c6f8.jpg',
                '2c9d6868-d396-4afb-8807-a7881be2b2b6.jpg'
            ],
            stock: 12,
            price: 47800,
            sizes: ['T1','T2'],
            slug: "lubricants_calibily_volb",
            status: 'S',
            tags: ['palACX','palBCX','palCCX'],
            title: "Lubricant's Calibily Volb",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Cras convallis faucibus ante, sed tincidunt justo dignissim vel. Curabitur sit amet tortor velit. Donec et pellentesque est. Duis semper iaculis vestibulum. Nulla quam sem, ultrices non risus a, volutpat pellentesque massa. Ut ultrices tellus consectetur, vulputate sem non, placerat augue. Proin tempor volutpat erat non commodo.",
            images: [
                'dbc5501c-f334-41b2-aa2f-0e7093fc6b6b.jpg',
                '25fdfcd9-9ad5-4c72-88e2-0ca072e99078.jpg',
                'dc37abe1-1a1c-40e7-97a1-98e1a461efdd.jpg',
                '936c6c81-42df-44ce-b603-037c4e715279.jpg',
                '6dcc9cd7-a79b-45cb-9db0-b792e26cc439.jpg',
                'd8882f0f-a082-42b6-977d-88903770ed43.jpg'
            ],
            stock: 50,
            price: 75000,
            sizes: ['N1'],
            slug: "picada_talikes_carbon",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Picada Talike's Carbon",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Suspendisse luctus auctor nulla vel vestibulum. In posuere aliquam sem, id interdum justo porttitor a. Nullam sed metus vel mauris mattis viverra. Donec euismod tortor felis. Vivamus justo lectus, vulputate quis placerat in, condimentum sed risus. Donec imperdiet lobortis eros sit amet pulvinar.",
            images: [
                '42c4f7cc-fcfa-4f3e-b838-54062cf09569.jpg',
                'b56b9975-d48c-4165-90a2-d7667b4404f3.jpg',
                'a462f53f-562f-4536-96da-bae7b4dd89d7.jpg'
            ],
            stock: 50,
            price: 95000,
            sizes: ['M1'],
            slug: "mariscoss_joes_motivations",
            status: 'S',
            tags: ['tagSSS','tagWWW','tagHHH','tagOOO'],
            title: "Mariscos's Joe's Motivations",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Integer feugiat, justo at aliquet mollis, leo ante cursus nisl, ut tincidunt nisl odio vitae nisl. Curabitur vestibulum erat enim, in pulvinar enim elementum sed. Fusce eleifend imperdiet mi ut suscipit. Donec in nibh et mauris euismod varius.",
            images: [
                '3f77c87f-9827-4e90-88bf-b74fc1193532.jpg',
                '202a5be2-5f66-4059-9a58-c44894ec2534.jpg',
                'f1248b84-3599-434f-9a24-200ef4965593.jpg'
            ],
            stock: 55,
            price: 36000,
            sizes: ['W1','W2','W3','W4'],
            slug: "paliquetas_pollo_claws",
            status: 'S',
            tags: ['tagQW','tagQX','tagQY'],
            title: "Paliquetas Pollo Claw's",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Suspendisse interdum neque metus. Ut ut nisl ut massa aliquet aliquam. Aenean eleifend quis arcu sed pharetra. Suspendisse id metus quis dolor molestie vulputate. Cras mollis erat ac volutpat tempus. Praesent dapibus efficitur ex sit amet tincidunt. Nulla eget finibus orci.",
            images: [
                '64f5f827-e81d-4548-b104-0b754a21a68c.jpg',
                '001afa55-b27f-47af-835f-417bce553658.jpg',
                'bc6da26e-0525-4538-b35d-b1d740f57b90.jpg',
                '18fbb209-2fc5-47eb-9648-8b3ac1fde638.jpg',
                '42211fb4-edee-4452-9633-b51eac71465b.jpg'
            ],
            stock: 10,
            price: 71000,
            sizes: ['AD1','AD2'],
            slug: "sprays_baly_stimulation",
            status: 'S',
            tags: ['pKT1','pKT2','pKT3'],
            title: "Spray's Baly Stimulation",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Maecenas ut augue erat. Pellentesque hendrerit, lectus id tristique molestie, dui magna luctus justo, quis sagittis neque orci et diam. Maecenas eros quam, varius in mollis id, vestibulum sit amet tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            images: [
                'a84e3b2d-4a22-4ad0-9052-f9398b845a88.jpg',
                'b85a9987-d64f-41e7-b9f8-97924fe77d2e.jpg',
                'a60a5c99-55e2-430f-a4cf-b230e579dc5e.jpg',
                'c1af030c-673d-45fa-a615-37a086cefadc.jpg',
                '0c91d53e-9870-4cff-9d12-0c75e52b4b5b.jpg',
                '5d178476-9cba-4dbf-ae01-78d92f6a7213.jpg',
                'c5b50fe5-20de-495b-8fbc-c0e1cd91348a.jpg'
            ],
            stock: 10,
            price: 51000,
            sizes: ['AX1','BX2','CX3','DX4'],
            slug: "fallys_sensual_colly",
            status: 'S',
            tags: ['Qw1','Qw2','Qw3'],
            title: "Fally's Sensual Colly",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Fusce euismod magna eu est elementum vehicula non ut augue. Curabitur vitae mollis ipsum, ac mattis tellus. Curabitur elementum lacinia dolor. Integer lacinia metus at purus suscipit ultrices. Morbi faucibus, est sit amet feugiat pulvinar, justo eros laoreet neque, sed interdum diam ante eget metus.",
            images: [
                'f747d5d4-ddfb-4339-a998-e69de3953283.jpg',
                '269c91f4-9f2e-42fc-9ff0-0e5a4daddeb5.jpg',
                '81267950-2eaa-452a-bfa6-5d1f6eeb48fd.jpg'
            ],
            stock: 40,
            price: 18900,
            sizes: ['AB3'],
            slug: "bercel_de_esposas_kms1",
            status: 'S',
            tags: ['KD-1','KD-2','KD-3','KD-4'],
            title: "Bercel de Esposas Kms1",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Fusce eget malesuada nulla, suscipit pharetra enim. Sed tincidunt quam sed sem rhoncus, vel porttitor dui dictum. Nulla in nibh elit. Nullam rutrum lacus ac lacus suscipit, at varius lectus convallis. Duis eleifend, libero eget lobortis varius, urna massa dignissim lectus, id cursus nunc erat nec felis.",
            images: [
                'e8ef3392-a96c-4e9e-9088-5cbfa72faab8.jpg',
                'c2dd3a4e-947f-42dc-b79b-6016c442e7e1.jpg',
                '5fee1807-91b4-4cc7-aec2-712026a78480.jpg',
                '9c37eb8d-350e-44e0-a362-ae7bc8995c5d.jpg'
            ],
            stock: 20,
            price: 41000,
            sizes: ['XXX1'],
            slug: "vibration_tamalus_sexiees",
            status: 'S',
            tags: ['B-1','B-2','XXX-OH','XXX-AH'],
            title: "Vibration Tamalu's Sexie'es",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Nunc elementum diam in diam faucibus, id pretium nulla placerat. Ut interdum, mi id venenatis consequat, tellus lorem tincidunt mauris, eu congue mauris magna ut neque. Aenean volutpat suscipit lectus, id eleifend orci dignissim fermentum. Mauris rhoncus nisl a dignissim luctus.",
            images: [
                '6728aa27-b41d-4355-986d-20cb0bf019b9.jpg',
                '26c5fe45-e773-4ba3-80da-854a426fc884.jpg',
                'e9e5abe3-9cb4-4242-a48e-fb3e7d75106f.jpg'
            ],
            stock: 100,
            price: 40000,
            sizes: ['D1'],
            slug: "magni_burguers_yija",
            status: 'S',
            tags: ['LUC2','LUC22','LUC33','LUC3'],
            title: "Magni Burguer's Yija",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

        {
            description: "Curabitur dictum orci ligula, sit amet laoreet nisl pellentesque ac. Pellentesque dignissim ac augue sit amet lacinia. Donec varius massa et imperdiet scelerisque. Pellentesque iaculis ullamcorper neque et laoreet. Duis efficitur porta tellus semper sodales.",
            images: [
                'd4783da2-ca92-4ec8-b6d7-07dc265e95d1.jpg',
                'f52a5159-a83e-4542-baee-322edd6b5a53.jpg',
                'bd7cc183-b3d7-4e17-b5ae-da25bb0f9c9f.jpg'
            ],
            stock: 15,
            price: 75000,
            sizes: ['CK1','CK2','CK3','CK4','CK5'],
            slug: "craviles_dall_motivations_xxx",
            status: 'S',
            tags: ['ECk1','ECk2','ECk3','ECk4'],
            title: "Cravile's Dall Motivation's XXX",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789"
        },

    ]

}