
import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import HeroBanner from './HeroCarousel';
import type { Currency } from './currency';
import FeaturesSection from './FeaturesSection';
import InteractiveCatalogSection from './InteractiveCatalogSection';

const ProductList: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, onProductSelect, onAddToCart, onQuickAddToCart, currency, onQuickView }) => {
    
    // --- DATA FILTERING BASED ON PROVIDED WOOCOMMERCE BLOCKS ---

    // 1. All Products Block (Muestra una selección amplia)
    const allProductsBlock = allProducts.slice(0, 8);

    // 2. Featured Product Block (Divine - ID 38497)
    const featuredProduct = allProducts.find(p => p.id === 38497); 

    // 3. Hand-Picked Products Block (Selección específica)
    const handPickedIds = [46642, 36151, 46968, 41338]; 
    const handPickedBlock = allProducts.filter(p => handPickedIds.includes(p.id));

    // 4. Best Selling Products Block (Alta valoración)
    const bestSellersBlock = allProducts.filter(p => p.rating && p.rating >= 4.9).slice(0, 4);

    // 5. Products By Category Block
    const categoriesBlock = [
        { id: 'skincare', label: 'Facial', img: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41058%2F41058_1.png' },
        { id: 'makeup', label: 'Maquillaje', img: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43237%2F43237_1.png' },
        { id: 'perfume', label: 'Fragancias', img: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38497%2FES%2F38497_1.png' },
        { id: 'wellness', label: 'Wellness', img: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F29696%2F29696.png' },
    ];

    // 6. Newest Products Block (Tag: NOVEDAD)
    const newestBlock = allProducts.filter(p => p.tag === 'NOVEDAD').slice(0, 4);
    
    return (
        <div className="space-y-24">
            
            {/* BLOCK 0: Hero / Banner (wp:image style) */}
            <HeroBanner onNavigate={onNavigate} />

            {/* BLOCK 1: ALL PRODUCTS */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                        <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">Todos los Productos</h3>
                        <button onClick={() => onNavigate('products', 'all')} className="text-sm font-bold text-brand-purple-dark hover:text-black uppercase tracking-wide">Ver Todo</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {allProductsBlock.map(product => (
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
                </section>
            </div>

            {/* BLOCK 2: FEATURED PRODUCT */}
            {featuredProduct && (
                <div className="bg-gray-50 py-16 border-y border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Producto Destacado</h3>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-full md:w-1/2 flex justify-center">
                                 <img src={featuredProduct.imageUrl} alt={featuredProduct.name} className="w-2/3 h-auto object-contain transform hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-primary">{featuredProduct.name}</h2>
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                    <span className="text-2xl font-bold text-brand-purple-dark">
                                        {featuredProduct.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                    </span>
                                    {featuredProduct.regularPrice && (
                                        <span className="text-lg text-gray-400 line-through">
                                            {featuredProduct.regularPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{featuredProduct.description}</p>
                                <button 
                                    onClick={() => onProductSelect(featuredProduct)}
                                    className="bg-black text-white font-bold py-3 px-10 rounded-full hover:bg-gray-800 transition-all shadow-lg"
                                >
                                    Comprar Ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* BLOCK 3: HAND-PICKED PRODUCTS */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                     <div className="text-center mb-10">
                        <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">Selección Especial</h3>
                        <div className="w-16 h-1 bg-brand-purple mx-auto mt-4"></div>
                        <p className="mt-2 text-gray-600">Nuestros favoritos seleccionados a mano.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {handPickedBlock.map(product => (
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
                </section>
            </div>

            {/* BLOCK 4: BEST SELLING PRODUCTS */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section className="bg-brand-purple/5 rounded-2xl p-8 border border-brand-purple/10">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">Los Más Vendidos</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {bestSellersBlock.map(product => (
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
                </section>
            </div>

            {/* BLOCK 5: PRODUCTS BY CATEGORY */}
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">Explora por Categoría</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categoriesBlock.map((cat) => (
                        <div 
                            key={cat.id}
                            onClick={() => onNavigate('products', cat.id)}
                            className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md aspect-[3/4] bg-gray-100 border border-gray-200"
                        >
                            <img 
                                src={cat.img} 
                                alt={cat.label} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg text-black font-bold text-lg uppercase tracking-wide shadow-lg group-hover:bg-white transition-colors">
                                    {cat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* BLOCK 6: NEWEST PRODUCTS */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">Novedades</h3>
                        <div className="w-16 h-1 bg-gray-200 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {newestBlock.map(product => (
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
                </section>
            </div>

            {/* Footer Info Blocks */}
            <FeaturesSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <InteractiveCatalogSection onNavigate={onNavigate} />
            </div>
        </div>
    );
};

export default ProductList;
