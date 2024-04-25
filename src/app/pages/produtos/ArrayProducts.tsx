type Product = {
    id: number;
    img: string;
    title: string;
    description: string;
    type: string; // Assuming product type can be anything (modify if needed)
    price: string; // Assuming price is displayed as a string
    oldPrice: string; // Assuming oldPrice is displayed as a string
    quantidade: number; // Assuming quantidade represents quantity
    newOrOld: string; // Assuming "novo" represents "New" or modify type
    imagens_lados: string[]; // Optional array of image paths for sides
    type_catalogo?: boolean; // Optional flag for catalog inclusion
    img_catalogo?: string; // Optional catalog image path
    title_catalogo?: string; // Optional catalog title
    link_catalogo?: string; // Optional catalog link
};

export const Products: Product[] = [
    {
        id: 1,
        img: '/keyBoard_1.png',
        title: 'LogiTech Keys',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 229,90',
        oldPrice: '329,90',
        type_catalogo: true,
        img_catalogo: '/teclado_catalogo.png',
        title_catalogo: 'Teclados',
        link_catalogo: '/pages/keyBoard',
        quantidade: 22,
        newOrOld: 'novo',
        imagens_lados: ['/keyBoard_1.png', '/keyBoard_1_1.png', '/keyBoard_1_2.png', '/keyBoard_1_3.png']
    },
    {
        id: 2,
        img: '/keyBoard_2.png',
        title: 'Mix Keys Mins',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 231,22',
        oldPrice: '331,90',
        type_catalogo: true,
        img_catalogo: '/mouse_catalogo_1.png',
        title_catalogo: 'Mouses',
        link_catalogo: '/pages/mouses',
        quantidade: 32,
        newOrOld: 'Usado',
        imagens_lados: ['/keyBoard_2.png', '/keyBoard_2_1.png', '/keyBoard_2_2.png', '/keyBoard_2_3.png']
    },
    {
        id: 3,
        img: '/keyBoard_3.png',
        title: 'Redragron Gamer',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 129,10',
        oldPrice: '219,90',
        type_catalogo: true,
        img_catalogo: '/monitor_catalogo_1.png',
        title_catalogo: 'Monitores',
        link_catalogo: '/pages/monitores',
        quantidade: 8,
        newOrOld: 'novo',
        imagens_lados: ['/keyBoard_3.png', '/keyBoard_3_1.png', '/keyBoard_3_2.png', '/keyBoard_3_3.png']
    },
    {
        id: 4,
        img: '/keyBoard_4.png',
        title: 'TH83',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 449,80',
        oldPrice: '529,90',
        type_catalogo: true,
        img_catalogo: '/caixa_catalogo_1.png',
        title_catalogo: 'Spkears',
        link_catalogo: '/pages/spkears',
        quantidade: 45,
        newOrOld: 'novo',
        imagens_lados: ['/keyBoard_4.png', '/keyBoard_4_1.png', '/keyBoard_4_2.png', '/keyBoard_4_3.png']
    },
    {
        id: 5,
        img: '/keyBoard_5.png',
        title: 'TH83',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 449,80',
        oldPrice: '529,90',
        type_catalogo: true,
        img_catalogo: '/mouse_pad_catalogo_1.png',
        title_catalogo: 'Mouse pads',
        link_catalogo: '/pages/mousePads',
        quantidade: 63,
        newOrOld: 'novo',
        imagens_lados: ['/keyBoard_5.png', '/keyBoard_5_1.png', '/keyBoard_5_2.png', '/keyBoard_5_3.png']
    },
    {
        id: 6,
        img: '/keyBoard_6.png',
        title: 'TH83',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'KeyBoard',
        price: 'R$ 449,80',
        oldPrice: '529,90',
        type_catalogo: true,
        img_catalogo: '/phone_banner.png',
        title_catalogo: 'Fones',
        link_catalogo: '/pages/fones',
        quantidade: 54,
        newOrOld: 'Usado',
        imagens_lados: ['/keyBoard_6.png', '/keyBoard_6_1.png', '/keyBoard_6_2.png', '/keyBoard_6_3.png']
    },
    {
        id: 7,
        img: '/mouse_1.png',
        title: 'Linux cc',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 279.90',
        oldPrice: '829,90',
        quantidade: 97,
        newOrOld: 'Novo',
        imagens_lados: ['/mouse_1.png', '/mouse_1_1.png', '/mouse_1_2.png', '/mouse_1_3.png']
    },
    {
        id: 8,
        img: '/mouse_2.png',
        title: 'HyperXCloud',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 229,90',
        oldPrice: '329,90',
        quantidade: 41,
        newOrOld: 'Usado',
        imagens_lados: ['/mouse_2.png', '/mouse_2_1.png', '/mouse_2_2.png', '/mouse_2_3.png']
    },
    {
        id: 9,
        img: '/mouse_3.png',
        title: 'Mouse Pro Max',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 180,71,',
        oldPrice: '289,90',
        quantidade: 62,
        newOrOld: 'novo',
        imagens_lados: ['/mouse_3.png', '/mouse_3_1.png', '/mouse_3_2.png', '/mouse_3_3.png']
    },
    {
        id: 10,
        img: '/mouse_4.png',
        title: 'Mouse S23 Plus',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 890,12',
        oldPrice: '1029,90',
        quantidade: 26,
        newOrOld: 'novo',
        imagens_lados: ['/mouse_4.png', '/mouse_4_1.png', '/mouse_4_2.png', '/mouse_4_3.png']
    },
    {
        id: 11,
        img: '/mouse_5.png',
        title: 'Xr 2017',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 1500,12',
        oldPrice: '1929,90',
        quantidade: 33,
        newOrOld: 'novo',
        imagens_lados: ['/mouse_5.png', '/mouse_5_1.png', '/mouse_5_2.png', '/mouse_5_3.png']
    },
    {
        id: 12,
        img: '/mouse_6.png',
        title: '11 2018',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Mouse',
        price: 'R$ 1200,12',
        oldPrice: '1329,90',
        quantidade: 810,
        newOrOld: 'novo',
        imagens_lados: ['/mouse_6.png', '/mouse_6_1.png', '/mouse_6_2.png', '/mouse_6_3.png']
    },
    {
        id: 13,
        img: '/phone_1.png',
        title: 'H7',
        description: 'Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.',
        type: 'Phone',
        price: 'R$ 699,99',
        oldPrice: '899,90',
        quantidade: 2,
        newOrOld: 'novo',
        imagens_lados: ['/phone_1.png', '/phone_1_1.png', '/phone_1_2.png', '/phone_1_3.png']
    }
]
