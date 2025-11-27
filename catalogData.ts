import type { Product } from './ProductCard';

export interface Hotspot {
    productId: number;
    position: {
        top: string;
        left: string;
        width: string;
        height: string;
    };
}

export interface CatalogPageData {
    pageNumber: number;
    imageUrl: string;
    hotspots: Hotspot[];
}

export const catalogProducts: Record<number, Product> = {
    48075: {
        id: 48075,
        name: "Tarjeta + Muestra Eau de Parfum Divine Dark Velvet",
        brand: "DIVINE",
        price: 1.00,
        imageUrl: "https://i.imgur.com/8x2M6C6.png",
        description: "Prueba la nueva y seductora fragancia Divine Dark Velvet con esta muestra de 2ml.",
        stock: 100,
        category: 'perfume',
    },
    49145: {
        id: 49145,
        name: "Collar Divine Dark Velvet",
        brand: "DIVINE",
        price: 29.99,
        regularPrice: 41.00,
        imageUrl: "https://i.imgur.com/e7pYwWf.png",
        description: "Un llamativo collar con eslabones dorados y brillantes detalles de cristal. El complemento perfecto para tu look de noche. Edición Limitada.",
        stock: 20,
        category: 'accessories',
    },
    46801: {
        id: 46801,
        name: "Eau de Parfum Divine Dark Velvet",
        brand: "DIVINE",
        price: 27.99,
        regularPrice: 45.00,
        imageUrl: "https://i.imgur.com/N1z2x3w.png",
        description: "Una fragancia floral amaderada con una alta concentración aromática. Notas de Ciruela oscura, Rosa Black Baccara y Pachuli.",
        stock: 18,
        category: 'perfume',
    },
    38497: {
        id: 38497,
        name: "Eau de Parfum Divine",
        brand: "DIVINE",
        price: 27.99,
        regularPrice: 45.00,
        imageUrl: "https://i.imgur.com/L4yqY4x.png",
        description: "Radiante fragancia de flores frescas con notas de Violeta, Lirio y Fresia, y un fondo de Madera de Sándalo. Elegante y sofisticado.",
        stock: 25,
        category: 'perfume',
    },
    42041: {
        id: 42041,
        name: "Spray Eau de Parfum Divine - Tamaño Viaje",
        brand: "DIVINE",
        price: 10.99,
        regularPrice: 20.00,
        imageUrl: "https://i.imgur.com/uC58GMA.png",
        description: "Tu fragancia favorita Divine en un práctico formato de viaje de 8ml para que la lleves siempre contigo.",
        stock: 40,
        category: 'perfume',
    },
    47016: {
        id: 47016,
        name: "Crema Corporal Perfumada Divine",
        brand: "DIVINE",
        price: 8.99,
        regularPrice: 18.00,
        imageUrl: "https://i.imgur.com/d9T6d9H.png",
        description: "Hidrata tu piel y perfúmala con el aroma radiante de Divine. Crema corporal de 250ml.",
        stock: 30,
        category: 'personal-care',
    },
    47828: {
        id: 47828,
        name: "Brocha Blush & Glow",
        brand: "GIORDANI GOLD",
        price: 6.49,
        regularPrice: 11.00,
        imageUrl: "https://i.imgur.com/T0bSg0B.png",
        description: "Brocha para colorete y iluminador fabricada con PBT, aluminio y madera. Tamaño: 16cm.",
        stock: 50,
        category: 'accessories',
    },
    46901: {
        id: 46901,
        name: "Perlas con Serum Giordani Gold - Edición Especial",
        brand: "GIORDANI GOLD",
        price: 21.99,
        regularPrice: 35.00,
        imageUrl: "https://i.imgur.com/gS2Y0fT.png",
        description: "Las icónicas Perlas Giordani Gold vuelven en el tono Cherry Touch. Disfruta de una textura aterciopelada y un acabado duradero.",
        stock: 30,
        category: 'makeup',
    },
    47949: {
        id: 47949,
        name: "Máscara 5 en 1 Wonder Lash Prom Queen THE ONE",
        brand: "THE ONE",
        price: 6.99,
        regularPrice: 15.00,
        imageUrl: "https://i.imgur.com/P1F9a1k.png",
        description: "La máscara de pestañas 5 en 1 para un look de reina. Aporta volumen, longitud, curvatura, definición y cuidado. Edición Limitada.",
        stock: 40,
        category: 'makeup',
    },
    153753: {
        id: 153753,
        name: "Lote Essense & Co. Flor de Loto y Madera de Cedro",
        brand: "Essense & Co.",
        price: 22.99,
        imageUrl: "https://i.imgur.com/eGkYg2p.png",
        description: "Lote compuesto por Jabón Líquido y Loción Hidratante para Manos y Cuerpo con Flor de Loto y Madera de Cedro. 300ml cada uno.",
        stock: 20,
        category: 'personal-care',
    }
};

export const catalogPages: CatalogPageData[] = [
    { pageNumber: 1, imageUrl: "https://i.imgur.com/gK9Z61H.jpeg", hotspots: [] },
    { pageNumber: 2, imageUrl: "https://i.imgur.com/w4pB3t3.jpeg", hotspots: [] },
    { pageNumber: 3, imageUrl: "https://i.imgur.com/1Zp7cTq.jpeg", hotspots: [] },
    { pageNumber: 4, imageUrl: "https://i.imgur.com/fL4q7iP.jpeg", hotspots: [] },
    { pageNumber: 5, imageUrl: "https://i.imgur.com/R21b1yS.jpeg", hotspots: [] },
    { pageNumber: 6, imageUrl: "https://i.imgur.com/kSjYm6b.jpeg", hotspots: [] },
    {
        pageNumber: 7,
        imageUrl: "https://i.imgur.com/h5T1GfP.jpeg",
        hotspots: [
            { productId: 48075, position: { top: '75%', left: '8%', width: '18%', height: '14%' } },
            { productId: 49145, position: { top: '30%', left: '20%', width: '60%', height: '40%' } },
            { productId: 46801, position: { top: '8%', left: '55%', width: '25%', height: '50%' } }
        ]
    },
    { pageNumber: 8, imageUrl: "https://i.imgur.com/qM6nI5D.jpeg", hotspots: [] },
    {
        pageNumber: 9,
        imageUrl: "https://i.imgur.com/f9e0P6q.jpeg",
        hotspots: [
            { productId: 38497, position: { top: '15%', left: '40%', width: '20%', height: '60%' } },
            { productId: 42041, position: { top: '78%', left: '32%', width: '5%', height: '15%' } },
            { productId: 47016, position: { top: '80%', left: '70%', width: '20%', height: '15%' } }
        ]
    },
    { pageNumber: 10, imageUrl: "https://i.imgur.com/zW0c2aL.jpeg", hotspots: [] },
    {
        pageNumber: 11,
        imageUrl: "https://i.imgur.com/hVw3L8M.jpeg",
        hotspots: [
            { productId: 47828, position: { top: '77%', left: '5%', width: '25%', height: '20%' } },
            { productId: 46901, position: { top: '22%', left: '25%', width: '50%', height: '50%' } }
        ]
    },
    { pageNumber: 12, imageUrl: "https://i.imgur.com/tHq8C4m.jpeg", hotspots: [] },
    {
        pageNumber: 13,
        imageUrl: "https://i.imgur.com/eZtFv3g.jpeg",
        hotspots: [
            { productId: 47949, position: { top: '30%', left: '30%', width: '18%', height: '55%' } }
        ]
    },
    { pageNumber: 14, imageUrl: "https://i.imgur.com/n4I2z3v.jpeg", hotspots: [] },
     {
        pageNumber: 15,
        imageUrl: "https://i.imgur.com/eGkYg2p.jpeg",
        hotspots: [
            { productId: 153753, position: { top: '25%', left: '10%', width: '80%', height: '50%' } }
        ]
    },
];
