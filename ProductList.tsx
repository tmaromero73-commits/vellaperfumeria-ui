import React from 'react';
import { type Currency } from './currency';
import { ProductCard, type Product } from './ProductCard';
import type { View } from '../App';

export type { Product };

const featuredProducts: Product[] = [
    {
        id: 66,
        name: "Bufanda Layers Of You",
        brand: "Oriflame",
        price: 26.61,
        regularPrice: 29.90,
        imageUrl: "https://i.imgur.com/kSjAl0M.png",
        description: "Elegante bufanda en blanco y negro, el accesorio perfecto para cualquier ocasión.",
        stock: 15,
        category: 'accessories',
        rating: 4,
        reviewCount: 140,
    },
    {
        id: 67,
        name: "Lote Mister Giordani",
        brand: "GIORDANI GOLD",
        price: 24.99,
        regularPrice: 55.49,
        imageUrl: "https://i.imgur.com/gK9t2qY.png",
        description: "El regalo perfecto para él. Incluye fragancia, desodorante y una bolsa de regalo.",
        stock: 10,
        category: 'men',
        tag: 'SET',
        rating: 0,
        reviewCount: 0,
    },
    {
        id: 68,
        name: "Lote Miss Giordani",
        brand: "GIORDANI GOLD",
        price: 24.99,
        regularPrice: 55.49,
        imageUrl: "https://i.imgur.com/L8p5nNf.png",
        description: "Un set elegante para ella, con la icónica fragancia Miss Giordani, desodorante y una bolsa.",
        stock: 10,
        category: 'perfume',
        tag: 'SET',
        rating: 0,
        reviewCount: 0,
    },
    {
        id: 69,
        name: "Eau de Parfum Divine Dark Velvet",
        brand: "DIVINE",
        price: 24.91,
        regularPrice: 45.00,
        imageUrl: "https://i.imgur.com/N1z2x3w.png",
        description: "Una fragancia misteriosa y seductora para la mujer que deja una impresión inolvidable.",
        stock: 18,
        category: 'perfume',
        rating: 4,
        reviewCount: 4,
    },
    {
        id: 70,
        name: "Niacinamida 10% Power Drops Proceuticals Novage+",
        brand: "NOVAGE+",
        price: 35.59,
        regularPrice: 57.00,
        imageUrl: "https://i.imgur.com/WbV1P4Q.png",
        description: "Sérum concentrado con Niacinamida al 10% para mejorar la textura de la piel y reducir los poros.",
        stock: 20,
        category: 'skincare',
        rating: 0,
        reviewCount: 0,
    },
    {
        id: 71,
        name: "Reloj Wild Wood para Él",
        brand: "Oriflame",
        price: 33.81,
        regularPrice: 49.99,
        imageUrl: "https://i.imgur.com/fJ4n9uY.png",
        description: "Reloj elegante y robusto para el hombre moderno, con un toque de naturaleza.",
        stock: 12,
        category: 'men',
        rating: 4,
        reviewCount: 5,
    },
    {
        id: 72,
        name: "Neceser Layers Of You",
        brand: "Oriflame",
        price: 31.15,
        regularPrice: 35.00,
        imageUrl: "https://i.imgur.com/jE6z4qC.png",
        description: "Un neceser espacioso y chic para llevar todos tus esenciales de belleza.",
        stock: 30,
        category: 'accessories',
        tag: 'NOVEDAD',
        rating: 3,
        reviewCount: 53,
    },
    {
        id: 73,
        name: "Lote Wellosophy",
        brand: "Wellosophy",
        price: 29.99,
        regularPrice: 41.48,
        imageUrl: "https://i.imgur.com/E2m8x3A.png",
        description: "Tu dosis diaria de bienestar con este lote especial de Wellosophy. Existencias limitadas.",
        stock: 5,
        category: 'wellness',
        tag: 'NOVEDAD',
        rating: 0,
        reviewCount: 0,
        statusLabel: 'EXISTENCIAS LIMITADAS',
    },
    {
        id: 74,
        name: "Calendario de Adviento 2025",
        brand: "Oriflame",
        price: 99.00,
        regularPrice: 297.00,
        imageUrl: "https://i.imgur.com/w2R3w8E.png",
        description: "Descubre una sorpresa de belleza cada día hasta Navidad con nuestro exclusivo Calendario de Adviento.",
        stock: 25,
        category: 'personal-care',
        tag: 'NOVEDAD',
        rating: 0,
        reviewCount: 0,
    },
    {
        id: 75,
        name: "Cepillo Estilizador Glam On-the-Go",
        brand: "Oriflame",
        price: 71.20,
        regularPrice: 80.00,
        imageUrl: "https://i.imgur.com/N6s5e9o.png",
        description: "Tu aliado perfecto para un cabello estilizado en cualquier lugar. Compacto y potente.",
        stock: 20,
        category: 'hair',
        tag: 'NOVEDAD',
        rating: 4,
        reviewCount: 64,
    },
    {
        id: 76,
        name: "Bata Hamptons",
        brand: "Oriflame",
        price: 40.00,
        imageUrl: "https://i.imgur.com/I7w3g6R.png",
        description: "Relájate con estilo con esta cómoda y elegante bata de rayas. De vuelta muy pronto.",
        stock: 0,
        category: 'accessories',
        rating: 3,
        reviewCount: 38,
        statusLabel: 'DE VUELTA MUY PRONTO',
    },
    {
        id: 77,
        name: "Complejo de Colágeno Wellosophy",
        brand: "Wellosophy",
        price: 39.99,
        regularPrice: 48.00,
        imageUrl: "https://i.imgur.com/D8k7s5T.png",
        description: "Nutre tu piel desde dentro con nuestro complejo de colágeno de alta calidad.",
        stock: 25,
        category: 'wellness',
        tag: 'NOVEDAD',
        rating: 3,
        reviewCount: 63,
    },
];

const products: Product[] = [
    // Perfumes
    { 
        id: 17, 
        name: "Giordani Gold Essenza", 
        brand: "Oriflame", 
        price: 35, 
        regularPrice: 50,
        imageUrl: "https://i.imgur.com/G5g2Bqj.png", 
        description: "Una joya de la perfumería de lujo. Centrada en la exclusiva nota Orange Blossom Luxury Essenza, esta fragancia floral amaderada irradia opulencia y un arte refinado.", 
        stock: 25,
        category: 'perfume'
    },
    { 
        id: 18, 
        name: "Possess The Secret Man", 
        brand: "Oriflame", 
        price: 32,
        regularPrice: 48,
        imageUrl: "https://i.imgur.com/zW8x49G.png", 
        description: "Inspirado en el dios nórdico Thor. Una fragancia intensamente masculina y poderosa con un acorde de hielo extremadamente fresco, salvia y madera de roble.", 
        stock: 8,
        category: 'perfume'
    },
    { 
        id: 19, 
        name: "Amber Elixir", 
        brand: "Oriflame", 
        price: 28,
        regularPrice: 42,
        imageUrl: "https://i.imgur.com/tY7rD0f.png", 
        description: "Un elixir ambarino y oriental que evoca un aura de misterio y seducción. Con notas de mandarina, heliotropo y ámbar, es una fragancia cálida y envolvente.", 
        stock: 5,
        category: 'perfume'
    },
    {
        id: 20,
        name: "Eclat Mon Parfum",
        brand: "Oriflame",
        price: 38,
        regularPrice: 55,
        imageUrl: "https://i.imgur.com/A5V1t9h.png",
        description: "El epítome de la elegancia parisina. Creado con el legendario acorde DeLaire, esta fragancia floral y radiante es un tributo a la feminidad moderna y sofisticada.",
        stock: 15,
        category: 'perfume'
    },
    {
        id: 21,
        name: "Mister Giordani",
        brand: "Oriflame",
        price: 30,
        regularPrice: 45,
        imageUrl: "https://i.imgur.com/sJ8T5dJ.png",
        description: "Una fragancia moderna y carismática con notas de vetiver y geranio. Captura la espontaneidad y la elegancia del hombre contemporáneo.",
        stock: 30,
        category: 'perfume'
    },
    {
        id: 22,
        name: "Divine Exclusive",
        brand: "Oriflame",
        price: 34,
        regularPrice: 50,
        imageUrl: "https://i.imgur.com/L4yqY4x.png",
        description: "Una fragancia chipre frutal deslumbrante y duradera. Con el exclusivo acorde Shining Star y pachulí intenso, deja una estela inolvidable.",
        stock: 12,
        category: 'perfume'
    },
    {
        id: 24,
        name: "Love Potion Eau de Parfum",
        brand: "Oriflame",
        price: 25,
        regularPrice: 40,
        imageUrl: "https://i.imgur.com/mP7G6xY.png",
        description: "Un arma de seducción con notas de jengibre, flor de cacao y chocolate. Una fragancia oriental y avainillada para momentos inolvidables.",
        stock: 0,
        category: 'perfume'
    },
    {
        id: 26,
        name: "Glacier Rock Eau de Toilette",
        brand: "Oriflame",
        price: 18,
        regularPrice: 28,
        imageUrl: "https://i.imgur.com/r3f8H2w.png",
        description: "Inspirada en la energía de la naturaleza. Una explosión cítrica y aromática que te impulsa a superar tus límites.",
        stock: 50,
        category: 'perfume'
    },
    // Hair Care
    {
        id: 27,
        name: "DUOLOGI Anti-Flake Purifying Shampoo",
        brand: "Oriflame",
        price: 13,
        regularPrice: 15,
        imageUrl: "https://i.imgur.com/7gXQ2Yy.png",
        description: "Champú purificante que actúa sobre la caspa, con Ácido Salicílico que micro-exfolia suavemente el cuero cabelludo para ayudar a eliminar las escamas.",
        stock: 40,
        category: 'hair'
    },
    {
        id: 28,
        name: "DUOLOGI Rich Cream Conditioner",
        brand: "Oriflame",
        price: 13,
        regularPrice: 15,
        imageUrl: "https://i.imgur.com/k4Qh2Sj.png",
        description: "Acondicionador cremoso y nutritivo que deja el cabello increíblemente suave y manejable. Formulado con lípidos de avena para nutrir intensamente.",
        stock: 35,
        category: 'hair'
    },
    {
        id: 29,
        name: "DUOLOGI Intense Repair Shampoo",
        brand: "Oriflame",
        price: 13,
        regularPrice: 15,
        imageUrl: "https://i.imgur.com/9FfJkSm.png",
        description: "Champú cremoso que limpia suavemente mientras protege el cabello de la rotura. Con queratina para fortalecer y reparar el cabello dañado.",
        stock: 28,
        category: 'hair'
    },
    {
        id: 30,
        name: "DUOLOGI Fall Resist Scalp Tonic",
        brand: "Oriflame",
        price: 16,
        regularPrice: 18,
        imageUrl: "https://i.imgur.com/kY6kZ2N.png",
        description: "Tónico para el cuero cabelludo sin aclarado que estimula el crecimiento del cabello desde la raíz, ayudando a prevenir la caída.",
        stock: 22,
        category: 'hair'
    },
    {
        id: 31,
        name: "DUOLOGI Sebum Control Shampoo",
        brand: "Oriflame",
        price: 13,
        regularPrice: 15,
        imageUrl: "https://i.imgur.com/p5A9H9a.png",
        description: "Champú que reequilibra el cuero cabelludo graso, limpiando en profundidad sin resecar. Ayuda a prolongar el tiempo entre lavados.",
        stock: 0,
        category: 'hair'
    },
    // Makeup - Giordani Gold
    {
        id: 32,
        name: "Base de Maquillaje Eternal Glow Serum",
        brand: "Oriflame",
        price: 24,
        regularPrice: 35,
        imageUrl: "https://i.imgur.com/8QpJRiP.png",
        description: "Base de maquillaje ligera con Ácido Hialurónico y Niacinamida que perfecciona la piel al instante y a largo plazo. Acabado luminoso.",
        stock: 15,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    },
    {
        id: 33,
        name: "Perlas Bronceadoras Giordani Gold",
        brand: "Oriflame",
        price: 22,
        regularPrice: 32,
        imageUrl: "https://i.imgur.com/gS2Y0fT.png",
        description: "Icónicas perlas de polvos de maquillaje que aportan calidez, color y luminosidad a la tez. Elaboradas a mano en Italia.",
        stock: 30,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    },
    {
        id: 34,
        name: "Máscara de Pestañas Fortificante",
        brand: "Oriflame",
        price: 16,
        regularPrice: 22,
        imageUrl: "https://i.imgur.com/A6D5FzM.png",
        description: "Máscara que define, alarga y fortalece las pestañas con cada aplicación. Color negro intenso y de larga duración.",
        stock: 25,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    },
     {
        id: 61,
        name: "Labial Iconic Giordani Gold SPF 15",
        brand: "Oriflame",
        price: 15,
        regularPrice: 21,
        imageUrl: "https://i.imgur.com/rN5t6fE.png",
        description: "Labial cremoso e hidratante con un color intenso y duradero. Enriquecido con aceite de Argán para un confort excepcional.",
        stock: 50,
        category: 'makeup',
        subCategory: 'Giordani Gold'
    },
    // Makeup - THE ONE
    {
        id: 35,
        name: "Labial Líquido Irresistible Touch",
        brand: "Oriflame",
        price: 12,
        regularPrice: 18,
        imageUrl: "https://i.imgur.com/gO0x2rY.png",
        description: "Labial líquido de alto brillo con color intenso y una sensación cómoda y no pegajosa. Acabado vinilo espectacular.",
        stock: 40,
        category: 'makeup',
        subCategory: 'THE ONE'
    },
    {
        id: 36,
        name: "Delineador de Ojos Stylo a Prueba de Agua",
        brand: "Oriflame",
        price: 10,
        regularPrice: 15,
        imageUrl: "https://i.imgur.com/dK3f0wY.png",
        description: "Delineador líquido con punta de fieltro para una aplicación precisa. Fórmula a prueba de agua que dura todo el día.",
        stock: 50,
        category: 'makeup',
        subCategory: 'THE ONE'
    },
    {
        id: 37,
        name: "Sombra de Ojos en Stick Colour Unlimited",
        brand: "Oriflame",
        price: 11,
        regularPrice: 16,
        imageUrl: "https://i.imgur.com/uG5D5uT.png",
        description: "Sombra en stick cremosa, fácil de aplicar y de larga duración. Color intenso y resistente a los pliegues.",
        stock: 0,
        category: 'makeup',
        subCategory: 'THE ONE'
    },
    {
        id: 64,
        name: "Máscara de Pestañas 5 en 1 Wonder Lash XXL",
        brand: "Oriflame",
        price: 14,
        regularPrice: 20,
        imageUrl: "https://i.imgur.com/zK8P7jW.png",
        description: "La icónica máscara 5 en 1 ahora en versión XXL para un volumen y longitud extremos. Define, riza y cuida tus pestañas.",
        stock: 0,
        category: 'makeup',
        subCategory: 'THE ONE'
    },
    // Makeup - OnColour
    {
        id: 38,
        name: "Base de Maquillaje Power Up",
        brand: "Oriflame",
        price: 9,
        regularPrice: 14,
        imageUrl: "https://i.imgur.com/wP2D3Bf.png",
        description: "Base de cobertura media con Manteca de Karité nutritiva. Ayuda a unificar el tono y a mantener la piel hidratada.",
        stock: 60,
        category: 'makeup',
        subCategory: 'OnColour'
    },
    {
        id: 39,
        name: "Esmalte de Uñas OnColour",
        brand: "Oriflame",
        price: 6,
        regularPrice: 9,
        imageUrl: "https://i.imgur.com/mO4P0xL.png",
        description: "Colores vibrantes y divertidos para tus uñas. Tecnología Colour Coverage para un acabado impecable y de alto brillo.",
        stock: 100,
        category: 'makeup',
        subCategory: 'OnColour'
    },
    {
        id: 65,
        name: "Perfeccionador Peach Glow OnColour",
        brand: "Oriflame",
        price: 8,
        regularPrice: 12,
        imageUrl: "https://i.imgur.com/cK2rG9v.png",
        description: "Iluminador en crema con un toque de color melocotón para un brillo natural y saludable. Hidrata y perfecciona la piel.",
        stock: 75,
        category: 'makeup',
        subCategory: 'OnColour'
    },
    // Skincare
    {
        id: 40,
        name: "Lote Experto NovAge+ Blemish + Age Defy",
        brand: "Oriflame",
        price: 150,
        regularPrice: 210,
        imageUrl: "https://i.imgur.com/dY0e3nN.png",
        description: "Rutina completa para combatir las imperfecciones y los signos de la edad. Piel visiblemente más lisa, clara y rejuvenecida.",
        stock: 10,
        category: 'skincare'
    },
    {
        id: 50,
        name: "Lote Experto NovAge+ Lift + Firm",
        brand: "Oriflame",
        price: 160,
        regularPrice: 220,
        imageUrl: "https://i.imgur.com/gHj8L0p.png",
        description: "Rutina antienvejecimiento avanzada para un efecto lifting y una piel más firme y elástica. Define el óvalo facial.",
        stock: 8,
        category: 'skincare'
    },
    {
        id: 41,
        name: "Crema de Día Hydra Radiance Optimals",
        brand: "Oriflame",
        price: 15,
        regularPrice: 21,
        imageUrl: "https://i.imgur.com/qL5V8Zf.png",
        description: "Crema de día hidratante que ilumina y protege la piel normal/mixta. Con antioxidantes de extractos de plantas suecas.",
        stock: 45,
        category: 'skincare'
    },
    {
        id: 42,
        name: "Mascarilla de Noche Waunt Revive Me",
        brand: "Oriflame",
        price: 20,
        regularPrice: 28,
        imageUrl: "https://i.imgur.com/cI1t8vW.png",
        description: "Mascarilla de noche que hidrata y revitaliza la piel mientras duermes. Despierta con un rostro radiante y descansado.",
        stock: 20,
        category: 'skincare'
    },
     {
        id: 51,
        name: "Limpiadora Purificante Love Nature",
        brand: "Oriflame",
        price: 10,
        regularPrice: 14,
        imageUrl: "https://i.imgur.com/tZ5yK9n.png",
        description: "Gel limpiador con Árbol de Té y Lima orgánicos que combate las imperfecciones y el exceso de grasa en la piel.",
        stock: 70,
        category: 'skincare'
    },
    // Personal Care
    {
        id: 43,
        name: "Crema Nutritiva Manos y Cuerpo Milk & Honey",
        brand: "Oriflame",
        price: 12,
        regularPrice: 17,
        imageUrl: "https://i.imgur.com/eP6p7xQ.png",
        description: "Crema ultra-indulgente con extractos orgánicos de leche y miel. Nutre intensamente para dejar la piel suave y perfumada.",
        stock: 80,
        category: 'personal-care'
    },
    {
        id: 54,
        name: "Exfoliante de Azúcar Milk & Honey Gold",
        brand: "Oriflame",
        price: 14,
        regularPrice: 20,
        imageUrl: "https://i.imgur.com/uR7xP1d.png",
        description: "Exfoliante corporal de lujo que pule la piel, dejándola suave, lisa y radiante. Con extractos orgánicos de leche y miel.",
        stock: 60,
        category: 'personal-care'
    },
    {
        id: 44,
        name: "Gel de Ducha Essense & Co. Limón y Verbena",
        brand: "Oriflame",
        price: 14,
        regularPrice: 19,
        imageUrl: "https://i.imgur.com/tH5rG8e.png",
        description: "Gel de ducha hidratante con aceites esenciales naturales. Su aroma cítrico y vibrante revitaliza los sentidos.",
        stock: 50,
        category: 'personal-care'
    },
    {
        id: 45,
        name: "Desodorante Roll-On Activelle Comfort",
        brand: "Oriflame",
        price: 7,
        regularPrice: 10,
        imageUrl: "https://i.imgur.com/sT9oG8p.png",
        description: "Protección antitranspirante hasta 48 horas. Fórmula suave que cuida la piel de las axilas y proporciona una sensación de confort.",
        stock: 120,
        category: 'personal-care'
    },
    {
        id: 55,
        name: "Limpiador Íntimo Feminelle Extra Comfort",
        brand: "Oriflame",
        price: 9,
        regularPrice: 13,
        imageUrl: "https://i.imgur.com/pL2kR3f.png",
        description: "Crema limpiadora suave para la zona íntima, con caléndula nutritiva. Ayuda a calmar y cuidar la piel delicada.",
        stock: 90,
        category: 'personal-care'
    },
    {
        id: 56,
        name: "Crema Reparadora de Talones Feet Up Advanced",
        brand: "Oriflame",
        price: 11,
        regularPrice: 16,
        imageUrl: "https://i.imgur.com/yQ9f8Xg.png",
        description: "Tratamiento intensivo que repara y alivia los talones agrietados. Resultados visibles en solo 3 días.",
        stock: 0,
        category: 'personal-care'
    },
    // For Him
    {
        id: 46,
        name: "Espuma de Afeitar North for Men Subzero",
        brand: "Oriflame",
        price: 10,
        regularPrice: 14,
        imageUrl: "https://i.imgur.com/qN8H0vU.png",
        description: "Espuma rica y cremosa que asegura un afeitado apurado y confortable. Con electrolitos y tecnología Arctic Pro Defence para proteger la piel.",
        stock: 40,
        category: 'men'
    },
    {
        id: 47,
        name: "Limpiador y Exfoliante 2 en 1 North for Men",
        brand: "Oriflame",
        price: 9,
        regularPrice: 13,
        imageUrl: "https://i.imgur.com/zW7X4yD.png",
        description: "Limpiador facial energizante con partículas exfoliantes de carbón. Elimina impurezas y deja la piel fresca y revitalizada.",
        stock: 35,
        category: 'men'
    },
    {
        id: 57,
        name: "Gel Hidratante 2 en 1 North for Men Subzero",
        brand: "Oriflame",
        price: 12,
        regularPrice: 17,
        imageUrl: "https://i.imgur.com/eO3f4gH.png",
        description: "Gel facial y para después del afeitado que calma, refresca e hidrata la piel al instante. Con efecto refrescante.",
        stock: 45,
        category: 'men'
    },
    {
        id: 58,
        name: "Eclat Toujours Eau de Toilette",
        brand: "Oriflame",
        price: 30,
        regularPrice: 45,
        imageUrl: "https://i.imgur.com/xO4s5kL.png",
        description: "Una fragancia masculina y romántica para los momentos de amor. Con notas de menta, lirio y cuero, captura la esencia del amor parisino.",
        stock: 20,
        category: 'men'
    },
    // Wellness
    {
        id: 48,
        name: "Batido Natural Balance Fresa",
        brand: "Oriflame",
        price: 35,
        regularPrice: 42,
        imageUrl: "https://i.imgur.com/cW3G0vX.png",
        description: "Snack saludable y delicioso, rico en proteínas y fibra. Ayuda a controlar el hambre y aporta energía de forma natural.",
        stock: 25,
        category: 'wellness'
    },
    {
        id: 49,
        name: "WellnessPack Mujer",
        brand: "Oriflame",
        price: 33,
        regularPrice: 40,
        imageUrl: "https://i.imgur.com/mF4H2zS.png",
        description: "Combinación de 12 vitaminas y 10 minerales, ácidos grasos Omega-3 y antioxidantes. Un sobre diario para tu bienestar.",
        stock: 18,
        category: 'wellness'
    },
    {
        id: 59,
        name: "WellnessPack Hombre",
        brand: "Oriflame",
        price: 33,
        regularPrice: 40,
        imageUrl: "https://i.imgur.com/bS3p5nH.png",
        description: "Un sobre diario con vitaminas, minerales, Omega-3 y antioxidantes adaptados a las necesidades del hombre.",
        stock: 15,
        category: 'wellness'
    },
    {
        id: 60,
        name: "Omega 3 Wellness by Oriflame",
        brand: "Oriflame",
        price: 25,
        regularPrice: 32,
        imageUrl: "https://i.imgur.com/aQ2j4vC.png",
        description: "Ácidos grasos esenciales de aceite de pescado sostenible. Apoya la función cerebral, la visión y la salud del corazón.",
        stock: 30,
        category: 'wellness'
    },
];

const ProductSection: React.FC<{
    title: string;
    products: Product[];
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement) => void;
    onProductSelect: (product: Product) => void;
    onNavigate?: (view: View) => void;
}> = ({ title, products, currency, onAddToCart, onProductSelect, onNavigate }) => {
    if (products.length === 0) return null;
    return (
        <section className="mb-20">
            {title === "Ofertas Destacadas" && onNavigate ? (
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate('ofertas');
                    }}
                    className="group"
                    aria-label="Ver todas las ofertas destacadas"
                >
                    <h3 className="text-3xl font-bold text-left mb-8 pb-2 border-b-2 border-rose-200 inline-flex items-center gap-2 group-hover:text-rose-600 transition-colors">
                        {title}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </h3>
                </a>
            ) : (
                <h3 className="text-3xl font-bold text-left mb-8 pb-2 border-b-2 border-rose-200">{title}</h3>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        currency={currency}
                        onAddToCart={onAddToCart}
                        onProductSelect={onProductSelect}
                    />
                ))}
            </div>
        </section>
    );
};


const ProductList: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement) => void;
    onProductSelect: (product: Product) => void;
    onNavigate: (view: View) => void;
}> = ({ currency, onAddToCart, onProductSelect, onNavigate }) => {

    const perfumeProducts = products.filter(p => p.category === 'perfume');
    const hairProducts = products.filter(p => p.category === 'hair');
    const makeupProducts = products.filter(p => p.category === 'makeup');
    const skincareProducts = products.filter(p => p.category === 'skincare');
    const personalCareProducts = products.filter(p => p.category === 'personal-care');
    const menProducts = products.filter(p => p.category === 'men');
    const wellnessProducts = products.filter(p => p.category === 'wellness');

    const giordaniGoldProducts = makeupProducts.filter(p => p.subCategory === 'Giordani Gold');
    const theOneProducts = makeupProducts.filter(p => p.subCategory === 'THE ONE');
    const onColourProducts = makeupProducts.filter(p => p.subCategory === 'OnColour');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-black tracking-tight">Nuestra Colección</h2>

            <ProductSection title="Ofertas Destacadas" products={featuredProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} onNavigate={onNavigate} />
            <ProductSection title="Perfumes" products={perfumeProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
            
            {makeupProducts.length > 0 && (
                <section id="makeup" className="mb-20">
                    <h3 className="text-3xl font-bold text-left mb-8 pb-2 border-b-2 border-rose-200">Maquillaje</h3>
                    {giordaniGoldProducts.length > 0 && (
                        <div className="mb-12">
                            <h4 className="text-2xl font-semibold text-left mb-6 text-black">Giordani Gold</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {giordaniGoldProducts.map(product => (
                                    <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
                                ))}
                            </div>
                        </div>
                    )}
                    {theOneProducts.length > 0 && (
                        <div className="mb-12">
                            <h4 className="text-2xl font-semibold text-left mb-6 text-black">THE ONE</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {theOneProducts.map(product => (
                                    <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
                                ))}
                            </div>
                        </div>
                    )}
                    {onColourProducts.length > 0 && (
                        <div>
                            <h4 className="text-2xl font-semibold text-left mb-6 text-black">OnColour</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {onColourProducts.map(product => (
                                    <ProductCard key={product.id} product={product} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}
            
            <ProductSection title="Cuidado de la Piel" products={skincareProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
            <ProductSection title="Cuidado del Cabello" products={hairProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
            <ProductSection title="Cuidado Personal" products={personalCareProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
            <ProductSection title="Para Él" products={menProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
            <ProductSection title="Bienestar" products={wellnessProducts} currency={currency} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
        </div>
    );
};

export default ProductList;