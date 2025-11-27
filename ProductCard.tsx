import React, { useRef } from 'react';
import { type Currency, formatCurrency } from './currency';

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number; // Offer price
    regularPrice?: number; // Optional original price
    imageUrl: string;
    description: string;
    stock: number;
    category: 'perfume' | 'hair' | 'makeup' | 'skincare' | 'personal-care' | 'men' | 'wellness' | 'accessories';
    subCategory?: 'Giordani Gold' | 'THE ONE' | 'OnColour'; // For makeup
    tag?: 'NOVEDAD' | 'SET';
    statusLabel?: string;
    rating?: number;
    reviewCount?: number;
}

const HeartIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const ShoppingBagIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const StarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const StarRating: React.FC<{ rating: number, reviewCount: number }> = ({ rating, reviewCount }) => {
    const fullStars = Math.round(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} className="w-4 h-4 text-gray-800" />)}
                {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)}
            </div>
            {reviewCount > 0 && <span className="text-xs text-gray-500 ml-2">({reviewCount})</span>}
        </div>
    );
};


export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement) => void;
    onProductSelect: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onProductSelect }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const isOutOfStock = product.stock === 0;

    const handleAddToCartClick = () => {
        if (btnRef.current && !isOutOfStock) {
            onAddToCart(product, btnRef.current);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col group text-center sm:text-left border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <button onClick={() => onProductSelect(product)} className="block w-full aspect-square bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400 rounded-t-lg">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </button>
                
                {product.tag && (
                    <span className={`absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded ${product.tag === 'SET' ? 'bg-cyan-500' : 'bg-teal-500'}`}>
                        {product.tag}
                    </span>
                )}
                
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <button aria-label="Añadir a la lista de deseos" className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white text-gray-700 hover:text-rose-500 transition-colors">
                        <HeartIcon />
                    </button>
                    <button
                        ref={btnRef}
                        onClick={handleAddToCartClick}
                        disabled={isOutOfStock}
                        aria-label="Añadir al carrito"
                        className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white text-gray-700 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ShoppingBagIcon />
                    </button>
                </div>
            </div>

            <div className="p-3 flex flex-col flex-grow">
                {product.rating !== undefined && product.reviewCount !== undefined ? (
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                ) : (
                    <div className="h-5" /> // Placeholder to maintain alignment
                )}
                
                <p className="text-gray-400 text-xs uppercase mt-2">{product.brand}</p>
                 <h3 
                    className="text-sm font-semibold text-black cursor-pointer hover:text-rose-600 mt-1 flex-grow"
                    onClick={() => onProductSelect(product)}
                >
                    {product.name}
                </h3>
                
                {product.statusLabel ? (
                    <p className="text-xs text-red-500 font-bold my-1 h-4">{product.statusLabel}</p>
                ) : (
                    <div className="h-4 my-1" /> // Placeholder
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-2 mt-auto pt-2">
                    <p className="text-lg font-bold text-red-600">{formatCurrency(product.price, currency)}</p>
                    {product.regularPrice && (
                        <p className="text-sm text-gray-500 line-through">{formatCurrency(product.regularPrice, currency)}</p>
                    )}
                </div>
            </div>
        </div>
    );
};
