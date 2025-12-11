
import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

// Helper to check if a product is an offer (has discount or tag)
const isOffer = (p: Product) => (p.regularPrice && p.regularPrice > p.price) || p.tag === 'OFERTA';

// All offers
const allOffers = allProducts.filter(isOffer);

// The main highlight product (Divine Dark Velvet - ID 46801)
const highlightProduct = allProducts.find(p => p.id === 46801);

const OfertasPage: React.FC<{
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {

    const renderProductGrid = (products: Product[]) => (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    onAddToCart={onAddToCart}
                    onQuickAddToCart={onQuickAddToCart}
                    onProductSelect={onProductSelect}
                    onQuickView={onQuickView}
                />
            ))}
        </div>
    );

    // Filter offers by category
    const makeupOffers = allOffers.filter(p => p.category === 'makeup');
    const fragranceOffers = allOffers.filter(p => p.category === 'perfume');
    const skincareOffers = allOffers.filter(p => p.category === 'skincare');
    const hairOffers = allOffers.filter(p => p.category === 'hair');
    const bodyOffers = allOffers.filter(p => p.category === 'personal-care');
    const accessoriesOffers = allOffers.filter(p => p.category === 'accessories');
    const wellnessOffers = allOffers.filter(p => p.category === 'wellness');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-black tracking-tight uppercase">Ofertas del Catálogo</h1>
                <p className="mt-4 text-xl text-gray-600">Descubre todas las promociones vigentes.</p>
            </div>

            {/* Highlight Product with Custom Color Background */}
            {highlightProduct && (
                 <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl text-white p-8 md:p-12 border border-white/10"
                    style={{ background: 'linear-gradient(135deg, #eb8dd08f 0%, #000000 100%)' }}
                 >
                    {/* Background Overlay Effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
                             <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 border border-white/30 tracking-widest">
                                Lanzamiento Exclusivo
                             </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">{highlightProduct.name}</h2>
                            <p className="text-pink-100 text-lg mb-8 leading-relaxed max-w-lg">{highlightProduct.description}</p>
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex flex-col">
                                    <span className="text-xs text-pink-200 uppercase tracking-wide">Precio Especial</span>
                                    <span className="text-4xl font-bold text-white">{highlightProduct.price}€</span>
                                </div>
                                {highlightProduct.regularPrice && (
                                    <div className="flex flex-col justify-end pb-1 opacity-70">
                                        <span className="text-xl line-through">{highlightProduct.regularPrice}€</span>
                                    </div>
                                )}
                            </div>
                            
                            <button
                                onClick={() => onProductSelect(highlightProduct)}
                                className="bg-white text-purple-900 font-bold py-3 px-10 rounded-full hover:bg-pink-50 transition-all shadow-lg transform hover:scale-105"
                            >
                                Ver Producto
                            </button>
                        </div>
                         <div className="w-full md:w-1/2 flex justify-center relative">
                             <div className="absolute inset-0 bg-white/5 rounded-full filter blur-2xl transform scale-90"></div>
                             <img 
                                src={highlightProduct.imageUrl} 
                                alt={highlightProduct.name} 
                                className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-700" 
                            />
                         </div>
                    </div>
                </div>
            )}
            
            {/* MAKEUP SECTION */}
            {makeupOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Maquillaje</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(makeupOffers)}
                </section>
            )}

            {/* FRAGRANCE SECTION */}
            {fragranceOffers.length > 0 && (
                <section>
                     <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Fragancias</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(fragranceOffers)}
                </section>
            )}

            {/* SKINCARE SECTION */}
            {skincareOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Cuidado Facial</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(skincareOffers)}
                </section>
            )}

             {/* HAIR SECTION */}
             {hairOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Cuidado del Cabello</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(hairOffers)}
                </section>
            )}

             {/* BODY SECTION */}
             {bodyOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Cuidado Corporal</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(bodyOffers)}
                </section>
            )}

             {/* WELLNESS SECTION */}
             {wellnessOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Wellness</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(wellnessOffers)}
                </section>
            )}
            
            {/* ACCESSORIES SECTION */}
             {accessoriesOffers.length > 0 && (
                <section>
                    <div className="flex items-center mb-6">
                         <h2 className="text-2xl font-bold border-b-4 border-brand-purple pb-1 pr-4">Accesorios</h2>
                         <div className="flex-grow border-b border-gray-200 h-2"></div>
                    </div>
                    {renderProductGrid(accessoriesOffers)}
                </section>
            )}
             
             <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
             `}</style>
        </div>
    );
};

export default OfertasPage;
