import React from 'react';
import { ProductCard, type Product } from './ProductCard';
import type { Currency } from './currency';

const ofertasProducts: Product[] = [
    {
        id: 101,
        name: "Bálsamo BB Cream OnColour",
        brand: "OnColour",
        price: 3.55,
        regularPrice: 10.00,
        imageUrl: "https://i.imgur.com/k6r5k3L.png",
        description: "Descubre la perfección 8 en 1. Nuestro Bálsamo BB Cream con SPF 10 no solo hidrata y unifica el tono de tu piel, sino que también la protege del sol. Su fórmula ligera se funde a la perfección para un acabado radiante y natural, disimulando imperfecciones y dejando un aspecto fresco durante todo el día. El imprescindible para tu rutina diaria.",
        stock: 50,
        category: 'makeup',
        subCategory: 'OnColour',
        rating: 4,
        reviewCount: 88,
    },
    {
        id: 102,
        name: "Maquillaje Everlasting Sync SPF 20",
        brand: "THE ONE",
        price: 10.67,
        regularPrice: 20.00,
        imageUrl: "https://i.imgur.com/gKj3a5T.png",
        description: "Experimenta una base de maquillaje inteligente que se adapta a ti. Everlasting Sync con SPF 20 y Tecnología Skin Response se sincroniza con la humedad del ambiente para mantener tu piel fresca y equilibrada. Disfruta de una cobertura media-alta modulable, un acabado semi-mate de larga duración y protección UVA. ¡Luce una piel perfecta sin esfuerzo durante 30 horas!",
        stock: 30,
        category: 'makeup',
        subCategory: 'THE ONE',
        rating: 5,
        reviewCount: 150,
    },
    {
        id: 103,
        name: "Pre-Champú Reparador Duologi",
        brand: "DUOLOGI",
        price: 5.82,
        regularPrice: 15.00,
        imageUrl: "https://i.imgur.com/eO3XW3h.png",
        description: "Revoluciona tu cuidado capilar con nuestro Pre-Champú Reparador. Este tratamiento prelavado de lujo está formulado para reparar la fibra capilar y reducir visiblemente el daño desde el primer uso. Fortalece, protege y restaura tu cabello antes del champú, preparándolo para un acabado que se siente nuevo y saludable. Fórmula sin parabenos ni siliconas para un cuidado puro y efectivo.",
        stock: 25,
        category: 'hair',
        rating: 4,
        reviewCount: 45,
    },
    {
        id: 104,
        name: "WellnessPack Mujer Wellosophy",
        brand: "Wellosophy",
        price: 34.99,
        regularPrice: 47.00,
        imageUrl: "https://i.imgur.com/mF4H2zS.png",
        description: "Potencia tu bienestar diario desde dentro con WellnessPack Mujer. Cada sobre contiene una combinación experta de 12 vitaminas y 10 minerales, ácidos grasos Omega-3 de alta calidad procedentes de aceite de pescado sostenible y potentes antioxidantes, incluyendo la Astaxantina. Diseñado para cubrir las necesidades nutricionales de la mujer, apoya la belleza de la piel, la energía y el sistema inmunitario.",
        stock: 20,
        category: 'wellness',
        rating: 5,
        reviewCount: 210,
    },
    {
        id: 105,
        name: "Crema de Noche Reafirmante Royal Velvet",
        brand: "Royal Velvet",
        price: 18.68,
        regularPrice: 42.00,
        imageUrl: "https://i.imgur.com/DqG7K2r.png",
        description: "Despierta con una piel visiblemente más firme y rejuvenecida. Nuestra Crema de Noche Reafirmante Royal Velvet, enriquecida con la exclusiva Infusión de Iris Negro, trabaja mientras duermes para fortalecer la estructura de la piel, mejorar la elasticidad y renovar el colágeno. Una experiencia nocturna de lujo para un contorno facial más definido.",
        stock: 15,
        category: 'skincare',
        rating: 5,
        reviewCount: 95,
    },
    {
        id: 106,
        name: "Eau de Parfum Love Potion",
        brand: "Oriflame",
        price: 21.35,
        regularPrice: 43.00,
        imageUrl: "https://i.imgur.com/mP7G6xY.png",
        description: "Desata tu poder de seducción con Love Potion. Una fragancia oriental y avainillada que explora el arte del amor. Sus notas afrodisíacas de jengibre especiado, flor de cacao y un toque de chocolate se entrelazan para crear una estela irresistible. El elixir perfecto para momentos inolvidables.",
        stock: 18,
        category: 'perfume',
        rating: 4,
        reviewCount: 123,
    },
    {
        id: 107,
        name: "Mascarilla Nocturna Novage+",
        brand: "NOVAGE+",
        price: 17.79,
        regularPrice: 39.00,
        imageUrl: "https://i.imgur.com/R3e8v5X.png",
        description: "Dale a tu piel un respiro y una recarga de hidratación intensa durante la noche. La Mascarilla Nocturna Novage+ está formulada con Ácido Hialurónico y nutritivo aceite Inca Inchi para borrar los signos de fatiga, fortalecer la barrera cutánea y restaurar la luminosidad. Despierta con un rostro visiblemente más descansado, suave y radiante.",
        stock: 22,
        category: 'skincare',
        rating: 5,
        reviewCount: 78,
    },
    {
        id: 108,
        name: "Polvos Compactos con Serum Giordani Gold",
        brand: "GIORDANI GOLD",
        price: 17.79,
        regularPrice: 26.00,
        imageUrl: "https://i.imgur.com/Z4c9e4V.png",
        description: "Más que un maquillaje, un tratamiento para tu piel. Los Polvos Compactos Giordani Gold fusionan un color de alta definición con un potente Serum Rejuvenecedor. Enriquecidos con Ácido Hialurónico hidratante y Extracto de Peonía Blanca, perfeccionan la tez mientras la cuidan. Incluyen Filtro Solar SPF para una protección diaria. El toque final para un acabado sedoso y luminoso.",
        stock: 35,
        category: 'makeup',
        subCategory: 'Giordani Gold',
        rating: 4,
        reviewCount: 65,
    },
    {
        id: 109,
        name: "Crema Reparadora Talones Agrietados Feet Up",
        brand: "Feet Up Expert",
        price: 6.22,
        regularPrice: 15.00,
        imageUrl: "https://i.imgur.com/mY77z9U.png",
        description: "¡Resultados visibles en 3 días! Esta crema de acción intensiva con Urea al 10%, tecnología Pro-Barrier y Empeline, repara e hidrata los talones agrietados. Clínicamente probada, restaura la suavidad y protege la barrera de la piel para unos pies sanos y bonitos.",
        stock: 40,
        category: 'personal-care',
        rating: 5,
        reviewCount: 195,
    },
     {
        id: 110,
        name: "Acondicionador Suavizante Miel y Leche",
        brand: "Milk & Honey Gold",
        price: 6.99,
        regularPrice: 13.00,
        imageUrl: "https://i.imgur.com/dK5zL9R.png",
        description: "Un acondicionador lujoso y cremoso para las pieles más delicadas. Enriquecido con extractos orgánicos de leche y miel, nutre y regenera en profundidad. Calma, suaviza y alivia picores, siendo ideal para cabello seco y pieles con condiciones como dermatitis o psoriasis.",
        stock: 30,
        category: 'hair',
        rating: 4,
        reviewCount: 77,
    },
    {
        id: 111,
        name: "Champú Suavizante Miel y Leche",
        brand: "Milk & Honey Gold",
        price: 6.99,
        regularPrice: 13.00,
        imageUrl: "https://i.imgur.com/rS2Xy5s.png",
        description: "Limpia y nutre tu cabello con este champú rico e hidratante. Su fórmula con extractos orgánicos de leche y miel es súper hidratante, regenera, calma y suaviza. Perfecto para el cabello seco y el cuidado de pieles delicadas, aliviando condiciones como la piel atópica o la psoriasis.",
        stock: 30,
        category: 'hair',
        rating: 4,
        reviewCount: 82,
    },
    {
        id: 112,
        name: "Champú Matizador Duologi",
        brand: "DUOLOGI",
        price: 7.56,
        regularPrice: 15.00,
        imageUrl: "https://i.imgur.com/pU2R6hF.png",
        description: "Neutraliza los tonos anaranjados y amarillentos no deseados en cabellos rubios y con mechas. Este champú con pigmentos violetas y Aminoácidos de Seda revitaliza el color, dejándolo brillante, suave y sin tonos cobrizos. ¡Consigue el rubio perfecto!",
        stock: 20,
        category: 'hair',
        rating: 5,
        reviewCount: 35,
    }
];


const OfertasPage: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement) => void;
    onProductSelect: (product: Product) => void;
}> = ({ currency, onAddToCart, onProductSelect }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-black tracking-tight">Ofertas Destacadas</h2>
                <p className="mt-2 text-xl text-gray-600 font-semibold">Catálogo Actual</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ofertasProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        currency={currency}
                        onAddToCart={onAddToCart}
                        onProductSelect={onProductSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfertasPage;
