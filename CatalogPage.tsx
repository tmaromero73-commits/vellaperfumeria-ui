import React, { useState, useRef } from 'react';
import type { Currency } from './currency';
import type { Product } from './ProductCard';
import { formatCurrency } from './currency';
import { catalogPages, catalogProducts } from './catalogData';

interface CatalogPageProps {
    currency: Currency;
    onAddToCart: (product: Product) => void;
    onProductSelect: (product: Product) => void;
}

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PlusIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);


const CatalogPage: React.FC<CatalogPageProps> = ({ currency, onAddToCart, onProductSelect }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(6); // Start at a page with products
    const [activeProductId, setActiveProductId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const popoverBtnRef = useRef<HTMLButtonElement>(null);


    const handleNextPage = () => {
        if (currentPageIndex < catalogPages.length - 1) {
            setIsLoading(true);
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPageIndex > 0) {
            setIsLoading(true);
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    const handleHotspotClick = (productId: number) => {
        setActiveProductId(productId);
    };

    const handleClosePopover = () => {
        setActiveProductId(null);
    };

    const handleViewDetails = (product: Product) => {
        handleClosePopover();
        onProductSelect(product);
    }
    
    const handleAddToCartInPopover = (product: Product) => {
        if (popoverBtnRef.current) {
            onAddToCart(product);
        }
        handleClosePopover();
    }

    const currentPageData = catalogPages[currentPageIndex];
    const activeProduct = activeProductId ? catalogProducts[activeProductId] : null;
    const discountPercent = activeProduct?.regularPrice && activeProduct.regularPrice > activeProduct.price
        ? Math.round(((activeProduct.regularPrice - activeProduct.price) / activeProduct.regularPrice) * 100)
        : null;


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-black tracking-tight mt-2">Catálogo Interactivo</h1>
                <p className="mt-2 text-lg text-gray-600">Haz clic en los productos para ver más detalles y añadirlos al carrito.</p>
            </div>

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPageIndex === 0}
                    className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    &larr; Anterior
                </button>
                <div className="font-semibold text-lg">
                    Página {currentPageData.pageNumber} / {catalogPages.length}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={currentPageIndex === catalogPages.length - 1}
                    className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Siguiente &rarr;
                </button>
            </div>

            <div className="relative max-w-4xl mx-auto aspect-[1/1.414] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                        <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    src={currentPageData.imageUrl}
                    alt={`Catálogo página ${currentPageData.pageNumber}`}
                    className="w-full h-full object-contain"
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                />
                {!isLoading && currentPageData.hotspots.map((hotspot, index) => (
                    <button
                        key={index}
                        onClick={() => handleHotspotClick(hotspot.productId)}
                        className="absolute group focus:outline-none"
                        style={hotspot.position}
                        aria-label={`Ver producto ${catalogProducts[hotspot.productId]?.name}`}
                    >
                        <div className="absolute inset-0 bg-black/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <PlusIcon />
                        </div>
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
                    </button>
                ))}
            </div>
             <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPageIndex === 0}
                    className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    &larr; Anterior
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPageIndex === catalogPages.length - 1}
                    className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Siguiente &rarr;
                </button>
            </div>


            {activeProduct && (
                 <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                    onClick={handleClosePopover}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="product-popover-title"
                >
                    <div 
                        className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={handleClosePopover} 
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
                            aria-label="Cerrar"
                        >
                            <CloseIcon />
                        </button>
                        
                        <div className="p-4">
                           <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-48 object-contain rounded-t-lg mb-4"/>
                           <h3 id="product-popover-title" className="text-lg font-bold text-center">{activeProduct.name}</h3>
                           <p className="text-sm text-gray-500 text-center mb-3">{activeProduct.brand}</p>
                           
                           <div className="flex items-baseline justify-center gap-2 mb-4">
                                <p className="text-2xl font-bold text-black">{formatCurrency(activeProduct.price, currency)}</p>
                                {activeProduct.regularPrice && activeProduct.regularPrice > activeProduct.price && (
                                    <p className="text-md text-gray-500 line-through">{formatCurrency(activeProduct.regularPrice, currency)}</p>
                                )}
                                {discountPercent && (
                                     <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                        -{discountPercent}%
                                    </span>
                                )}
                           </div>

                           <div className="flex flex-col gap-2">
                                <button
                                    ref={popoverBtnRef}
                                    onClick={() => handleAddToCartInPopover(activeProduct)}
                                    disabled={activeProduct.stock === 0}
                                    className="w-full bg-[#EBCFFC] text-black font-bold py-2.5 rounded-lg hover:bg-[#e0c2fa] transition-colors disabled:bg-gray-300"
                                >
                                    {activeProduct.stock === 0 ? 'Agotado' : 'Añadir al carrito'}
                                </button>
                                 <button
                                    onClick={() => handleViewDetails(activeProduct)}
                                    className="w-full bg-gray-100 text-black font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Ver detalles
                                </button>
                           </div>
                        </div>

                    </div>
                </div>
            )}
             <style>
                {`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                `}
            </style>
        </div>
    );
};

export default CatalogPage;
