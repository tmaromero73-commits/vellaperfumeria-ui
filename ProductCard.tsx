
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

// --- ICONS ---
const HeartIcon: React.FC<{isFilled: boolean}> = ({ isFilled }) => (
    <svg className="h-6 w-6" fill={isFilled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const StarIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
    <svg className={`w-3 h-3 ${className}`} style={style} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const CartPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m-2-2h4" />
    </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);


export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const isDiscounted = product.regularPrice && product.regularPrice > product.price;
    const hasVariants = product.variants && Object.keys(product.variants).length > 0;

    const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsWishlisted(prev => !prev);
    };

    const renderStars = () => {
        if (!product.rating) return null;
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <div className="flex items-center" title={`${product.rating}/5 ★`}>
                {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} className="text-amber-400" />)}
                {halfStar && <StarIcon key="half" className="text-amber-400" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />}
                {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="text-gray-300" />)}
            </div>
        );
    };
    
    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (hasVariants) {
            onQuickView(product); // Open Quick View for variants instead of navigating
        } else {
            onQuickAddToCart(product, btnRef.current, null);
        }
    };


    return (
        <div 
            className="bg-white rounded-lg flex flex-col group border border-gray-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
            onClick={() => onProductSelect(product)}
        >
            {/* Badges */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {isDiscounted && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                        -{Math.round(((product.regularPrice! - product.price) / product.regularPrice!) * 100)}%
                    </span>
                )}
                {product.tag && (
                    <span className="bg-pink-500/15 text-pink-600 text-[10px] font-bold px-2 py-1 rounded uppercase backdrop-blur-sm border border-pink-200/50">
                        {product.tag}
                    </span>
                )}
            </div>

            <div className="relative cursor-pointer overflow-hidden bg-gray-50 aspect-[4/5]">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />

                {/* Hover Overlay Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handleToggleWishlist}
                        className={`p-2 rounded-full shadow-md transition-all transform hover:scale-110 ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'}`}
                        aria-label="Añadir a favoritos"
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                        className="p-2 rounded-full bg-white text-gray-600 shadow-md transition-all transform hover:scale-110 hover:text-brand-primary"
                        aria-label="Vista Rápida"
                    >
                        <EyeIcon />
                    </button>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                    {product.rating && (
                        <div className="flex items-center gap-1 mb-1">
                            {renderStars()}
                            <span className="text-[10px] text-gray-400">({product.reviewCount})</span>
                        </div>
                    )}
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{product.brand}</span>
                    <h3 className="text-sm font-bold text-brand-primary leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors mb-2">
                        {product.name}
                    </h3>
                    
                     {product.variants?.Tono && (
                        <div className="flex items-center gap-1 mb-2">
                            {product.variants.Tono.slice(0, 5).map(v => (
                                <span key={v.value} className="block w-3 h-3 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: v.colorCode }} title={v.value}></span>
                            ))}
                            {product.variants.Tono.length > 5 && <span className="text-[10px] text-gray-400">+</span>}
                        </div>
                    )}
                </div>
                
                {/* Price & Basket Area - Designed to look like "names in little baskets" */}
                <div className="mt-3 flex items-end justify-between gap-2 pt-3 border-t border-gray-50">
                    <div className="flex flex-col">
                         {isDiscounted && (
                            <span className="text-xs text-gray-400 line-through decoration-red-300">{formatCurrency(product.regularPrice!, currency)}</span>
                        )}
                        <span className={`text-lg font-extrabold ${isDiscounted ? 'text-red-600' : 'text-brand-primary'}`}>
                            {formatCurrency(product.price, currency)}
                        </span>
                    </div>
                    
                    <button
                        ref={btnRef}
                        onClick={handleAddToCartClick}
                        className="bg-pink-500 text-white p-2.5 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group/btn"
                        aria-label={`Añadir ${product.name} al carrito`}
                        title="Añadir a la cesta"
                    >
                        <CartPlusIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
