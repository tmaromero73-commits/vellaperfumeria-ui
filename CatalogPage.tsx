
import React, { useState, useRef } from 'react';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';

// Updated to Catalog 17 BRP
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2025017-brp?HideStandardUI=true&Page=1';
const FALLBACK_CATALOG_URL = 'https://es.oriflame.com/products/digital-catalogue-current';

interface CatalogPageProps {
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
    currency: Currency;
}

const VisaIcon = () => (
    <svg className="w-10 h-6" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect width="38" height="24" rx="2" fill="white"/>
       <path d="M15.5 15.5L13.5 4.5H11.5L9 10.5L7.5 6.5L7 4.5H5L8.5 15.5H11L13 9.5L14.5 4.5H15.5V15.5Z" fill="#1A1F71"/>
       <path d="M20.5 15.5L22.5 4.5H20.5L19.5 9L18.5 4.5H16.5L18.5 15.5H20.5Z" fill="#1A1F71"/>
       <path d="M26.5 15.5L28.5 4.5H26.5L25 8.5L23.5 4.5H21.5L23.5 15.5H26.5Z" fill="#1A1F71"/>
       <path d="M32.5 4.5H29.5L28.5 9L27.5 4.5H25.5L28.5 15.5H30.5L34.5 4.5H32.5Z" fill="#1A1F71"/>
       <path d="M11 15.5L13 4.5H15L13 15.5H11Z" fill="#1A1F71"/>
       <path d="M25.7 6.8C25.2 6.6 24.6 6.5 24 6.5C22.6 6.5 21.5 7.2 21.5 8.6C21.5 9.6 22.4 10.2 23.1 10.5C23.8 10.8 24 11 24 11.3C24 11.7 23.6 11.9 23.1 11.9C22.5 11.9 22 11.8 21.6 11.6L21.3 12.8C21.8 13 22.5 13.1 23.1 13.1C24.7 13.1 25.8 12.3 25.8 10.9C25.8 9.8 25.1 9.2 24.3 8.9C23.6 8.6 23.3 8.3 23.3 8C23.3 7.7 23.7 7.5 24.1 7.5C24.6 7.5 25 7.6 25.4 7.8L25.7 6.8Z" fill="#1A1F71"/>
       <path d="M30.6 6.5H28.9L28 11.5L28.9 6.5Z" fill="#1A1F71"/>
       <path d="M32.9 6.5L32.5 8.6C32.3 7.9 32.1 7.2 31.8 6.5H30.2L30.6 8.6L30.2 11.5L31.1 6.5Z" fill="#1A1F71"/>
    </svg>
);

const MastercardIcon = () => (
    <svg className="w-10 h-6" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="24" rx="2" fill="white"/>
        <circle cx="13" cy="12" r="7" fill="#EB001B"/>
        <circle cx="25" cy="12" r="7" fill="#F79E1B"/>
        <path d="M19 16.4C20.3 15.4 21.2 13.8 21.2 12C21.2 10.2 20.3 8.6 19 7.6C17.7 8.6 16.8 10.2 16.8 12C16.8 13.8 17.7 15.4 19 16.4Z" fill="#FF5F00"/>
    </svg>
);

const PayPalIcon = () => (
    <svg className="w-10 h-6" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="24" rx="2" fill="white"/>
        <path d="M26.5 7.5L23.5 7.5L22.5 13.5L26.5 7.5Z" fill="#003087"/>
        <path d="M22.5 13.5L20.5 13.5L21.5 7.5L24.5 7.5L22.5 13.5Z" fill="#003087"/>
        <path d="M14.5 7.5C15.5 7.5 16.5 8 16.5 9.5C16.5 10.5 16 11.5 15 11.5H13.5L14.5 7.5Z" fill="#003087"/>
        <path d="M10.5 7.5H13.5L12.5 13.5H9.5L10.5 7.5Z" fill="#003087"/>
        <path d="M13 12.5H11.5L12 9.5L13 12.5Z" fill="#009CDE"/>
        <path d="M16 10.5C16 11.5 15.5 12.5 14.5 12.5H13L13.5 9.5H15C15.5 9.5 16 9.8 16 10.5Z" fill="#009CDE"/>
        <path d="M20 7.5L18 13.5H16.5L18.5 7.5H20Z" fill="#009CDE"/>
    </svg>
);

const CatalogPage: React.FC<CatalogPageProps> = ({ onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, currency }) => {
    const [quickAddCode, setQuickAddCode] = useState('');
    const [addStatus, setAddStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleQuickAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!quickAddCode.trim()) return;

        const code = parseInt(quickAddCode.trim());
        const product = allProducts.find(p => p.id === code);

        if (product) {
            onAddToCart(product, buttonRef.current, null);
            setAddStatus('success');
            setStatusMessage(`¡${product.name} añadido al carrito!`);
            setQuickAddCode('');
            
            setTimeout(() => {
                setAddStatus('idle');
                setStatusMessage('');
            }, 3000);
        } else {
            setAddStatus('error');
            setStatusMessage('Producto no encontrado en stock online. Contáctanos.');
            setTimeout(() => {
                setAddStatus('idle');
                setStatusMessage('');
            }, 3000);
        }
    };

    // Featured catalog products for the list below
    const catalogProducts = allProducts.slice(0, 8); 

    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div className="flex-grow flex flex-col md:flex-row h-full">
                
                {/* Catalog Viewer - Takes maximum space */}
                <div className="flex-grow flex flex-col h-[calc(100vh-140px)] min-h-[600px] relative">
                    <iframe
                        id="ipaper-catalogue" 
                        data-ipaper="true"
                        data-testid="Presentation-catalogue-ipaper-iframe"
                        src={INTERACTIVE_CATALOG_URL}
                        title="iPaper"
                        className="w-full h-full border-none products-app-emotion-z39r5g"
                        allowFullScreen
                        loading="lazy"
                    />
                    
                    <div className="absolute bottom-2 right-4 bg-white/80 p-1 rounded text-xs">
                        <a href={FALLBACK_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-purple-dark">
                            Abrir en ventana externa
                        </a>
                    </div>
                </div>

                {/* Quick Order Sidebar - Hidden on small screens, can be toggled or shown below on mobile if needed, but for "full page" effect kept to side on desktop */}
                <div className="hidden md:flex w-72 lg:w-80 flex-shrink-0 bg-white border-l border-gray-200 flex-col overflow-y-auto h-[calc(100vh-140px)] sticky top-0">
                    <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                         <div className="flex items-center gap-2 text-brand-purple-dark mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h2 className="text-base font-bold text-black">Pedido Rápido</h2>
                        </div>
                        <p className="text-xs text-gray-500">Introduce el código del producto.</p>
                    </div>

                    <div className="p-4 flex-grow">
                        <form onSubmit={handleQuickAdd} className="space-y-3">
                            <div>
                                <label htmlFor="quickCode" className="sr-only">Código del producto</label>
                                <input
                                    type="number"
                                    id="quickCode"
                                    placeholder="Código (ej: 38497)"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-transparent"
                                    value={quickAddCode}
                                    onChange={(e) => setQuickAddCode(e.target.value)}
                                />
                            </div>
                            <button
                                ref={buttonRef}
                                type="submit"
                                disabled={!quickAddCode}
                                className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm shadow-sm"
                            >
                                Añadir
                            </button>
                        </form>

                        {statusMessage && (
                            <div className={`mt-3 p-2 rounded-md text-xs font-medium animate-fade-in ${
                                addStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                                {statusMessage}
                            </div>
                        )}
                        
                        <div className="mt-8 pt-4 border-t border-gray-200">
                             <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Destacados</h3>
                             <div className="space-y-3">
                                {catalogProducts.slice(0, 3).map(p => (
                                    <div key={p.id} className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-1 rounded" onClick={() => onProductSelect(p)}>
                                        <img src={p.imageUrl} alt={p.name} className="w-10 h-10 object-contain" />
                                        <div className="overflow-hidden">
                                            <p className="text-xs font-medium truncate">{p.name}</p>
                                            <p className="text-xs font-bold">{p.price}€</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-white text-center">
                         <div className="flex justify-center gap-2 grayscale opacity-70 scale-75">
                                <VisaIcon />
                                <MastercardIcon />
                                <PayPalIcon />
                            </div>
                    </div>
                </div>
            </div>

            {/* Mobile View: Quick Order Form below catalog */}
            <div className="md:hidden p-4 bg-white">
                <h2 className="text-lg font-bold mb-2">Pedido Rápido</h2>
                <form onSubmit={handleQuickAdd} className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Código"
                        className="flex-grow border border-gray-300 rounded-md px-3 py-2"
                        value={quickAddCode}
                        onChange={(e) => setQuickAddCode(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={!quickAddCode}
                        className="bg-black text-white font-bold py-2 px-4 rounded-md"
                    >
                        Añadir
                    </button>
                </form>
                {statusMessage && <p className="text-xs mt-2">{statusMessage}</p>}
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CatalogPage;
