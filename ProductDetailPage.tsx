import React, { useRef, useState } from 'react';
import { type Product } from './ProductCard';
import { type Currency, formatCurrency } from './currency';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement) => void;
    onBack: () => void;
}

// SVG Icons for the Share Modal and new Reviews section
const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const StarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart, onBack }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copiar enlace');

    const [reviews, setReviews] = useState<Review[]>([
        { author: 'Ana G.', rating: 5, text: '¡Me encanta este producto! Huele de maravilla y la calidad es excepcional. Lo compraré de nuevo sin duda.', date: '20/07/2024' },
        { author: 'Carlos M.', rating: 4, text: 'Muy buen producto, cumple con lo que promete. El envío fue rápido y todo llegó en perfecto estado.', date: '15/07/2024' },
    ]);
    const [newReview, setNewReview] = useState({ author: '', rating: 0, text: '' });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    const productUrl = window.location.href;
    const productTitle = `¡Mira este producto: ${product.name}!`;

    const discountPercent = product.regularPrice && product.regularPrice > product.price
        ? Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)
        : null;

    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(productTitle)}%20${encodeURIComponent(productUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(productTitle)}`,
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(productUrl).then(() => {
            setCopyButtonText('¡Copiado!');
            setTimeout(() => setCopyButtonText('Copiar enlace'), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('No se pudo copiar el enlace.');
        });
    };

    const getStockInfo = (stock: number): { text: string; color: string } => {
        if (stock === 0) {
            return { text: 'Agotado', color: 'text-red-600' };
        }
        if (stock <= 10) {
            return { text: 'Pocas unidades', color: 'text-amber-600' };
        }
        return { text: 'En stock', color: 'text-green-600' };
    };

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newReview.author.trim() && newReview.rating > 0 && newReview.text.trim()) {
            const reviewToPublish: Review = {
                ...newReview,
                date: new Date().toLocaleDateString('es-ES'),
            };
            setReviews([reviewToPublish, ...reviews]);
            setNewReview({ author: '', rating: 0, text: '' });
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }
    };
    
    const isReviewFormValid = newReview.author.trim() && newReview.rating > 0 && newReview.text.trim();
    const stockInfo = getStockInfo(product.stock);
    const isOutOfStock = product.stock === 0;

    return (
        <div className="container mx-auto">
            <div className="mb-6">
                <button
                    onClick={onBack}
                    className="text-rose-600 hover:text-rose-800 font-semibold transition-colors"
                >
                    &larr; Volver a la tienda
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2 md:gap-8 p-4 md:p-8">
                <div className="p-4 flex justify-center items-center bg-gray-100 rounded-lg">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="max-h-96 object-contain"
                    />
                </div>

                <div className="p-4 flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">{product.name}</h1>
                    
                    <div className="flex items-baseline gap-3 mb-4">
                        <p className="text-3xl font-bold text-black">{formatCurrency(product.price, currency)}</p>
                        {product.regularPrice && product.regularPrice > product.price && (
                            <p className="text-xl text-black/60 line-through">{formatCurrency(product.regularPrice, currency)}</p>
                        )}
                        {discountPercent && (
                             <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">
                                -{discountPercent}% DTO
                            </span>
                        )}
                    </div>
                    
                    <p className="text-black leading-relaxed mb-4">{product.description}</p>
                    
                    <div className="mb-6">
                        <p className="text-sm font-semibold">Disponibilidad: <span className={`font-bold ${stockInfo.color}`}>{stockInfo.text}</span></p>
                    </div>
                    
                    <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
                        <button
                            ref={btnRef}
                            onClick={() => {
                                if (btnRef.current && !isOutOfStock) {
                                    onAddToCart(product, btnRef.current);
                                }
                            }}
                            disabled={isOutOfStock}
                            className={`w-full sm:w-auto flex-grow font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ${isOutOfStock ? 'bg-gray-300 text-black/50 cursor-not-allowed' : 'bg-[#EBCFFC] text-black hover:bg-[#e0c2fa] transform hover:scale-105 active:scale-95'}`}
                            aria-label={`Añadir ${product.name} al carrito`}
                        >
                            {isOutOfStock ? 'Agotado' : 'Añadir al carrito'}
                        </button>
                        <button
                           onClick={() => {
                               setIsShareModalOpen(true);
                               setCopyButtonText('Copiar enlace'); // Reset button text
                           }}
                           className="w-full sm:w-auto bg-[#EBCFFC] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#e0c2fa] transition-colors duration-300 active:scale-95"
                           aria-label="Compartir este producto"
                        >
                           Compartir
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Reviews Section --- */}
            <div className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Valoraciones de Clientes</h2>
                
                {/* Review Form */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <h3 className="text-lg font-semibold">Escribe tu opinión</h3>
                        {showSuccessMessage && (
                             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                                <p className="font-bold">¡Gracias!</p>
                                <p>Tu reseña ha sido publicada.</p>
                            </div>
                        )}
                        <div>
                            <label htmlFor="reviewAuthor" className="block text-sm font-medium text-gray-700 mb-1">Tu nombre</label>
                            <input
                                type="text"
                                id="reviewAuthor"
                                value={newReview.author}
                                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                                required
                            />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Tu valoración</label>
                             <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="focus:outline-none"
                                        aria-label={`Valorar con ${star} estrella${star > 1 ? 's' : ''}`}
                                    >
                                        <StarIcon
                                            className={`w-7 h-7 cursor-pointer transition-colors ${
                                                (hoverRating || newReview.rating) >= star
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">Tu reseña</label>
                            <textarea
                                id="reviewText"
                                rows={4}
                                value={newReview.text}
                                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                                required
                            />
                        </div>
                        <div className="text-right">
                             <button
                                type="submit"
                                disabled={!isReviewFormValid}
                                className="bg-[#EBCFFC] text-black font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-[#e0c2fa] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Publicar reseña
                            </button>
                        </div>
                    </form>
                </div>

                {/* Existing Reviews */}
                <div className="space-y-6">
                    {reviews.length > 0 ? reviews.map((review, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border-b">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <UserIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-1">
                                    <p className="font-bold">{review.author}</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                                <p className="text-gray-700">{review.text}</p>
                            </div>
                        </div>
                    )) : (
                        <p className="text-center text-gray-500 py-4">No hay reseñas para este producto todavía. ¡Sé el primero!</p>
                    )}
                </div>
            </div>

            {isShareModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={() => setIsShareModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="share-modal-title"
                >
                    <div 
                        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                        onClick={(e) => e.stopPropagation()}
                        style={{animation: 'fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)'}}
                    >
                        <button 
                            onClick={() => setIsShareModalOpen(false)} 
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            aria-label="Cerrar modal"
                        >
                            <CloseIcon />
                        </button>
                        
                        <h2 id="share-modal-title" className="text-xl font-bold mb-2 text-center">Compartir Producto</h2>
                        <p className="font-semibold truncate mb-4 text-center text-gray-700">{product.name}</p>
                        
                        <div className="flex justify-around items-center my-6">
                            <a href={shareLinks.whatsapp} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110" aria-label="Compartir en WhatsApp">
                               <WhatsAppIcon />
                            </a>
                             <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110" aria-label="Compartir en Facebook">
                               <FacebookIcon />
                            </a>
                             <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-transform transform hover:scale-110" aria-label="Compartir en Twitter">
                               <TwitterIcon />
                            </a>
                        </div>

                        <div className="flex items-center border rounded-lg p-1">
                            <input 
                                type="text" 
                                readOnly 
                                value={productUrl} 
                                className="flex-grow text-sm text-gray-500 bg-transparent focus:outline-none px-2"
                                aria-label="Enlace del producto"
                            />
                            <button 
                                onClick={handleCopyLink} 
                                className={`text-sm font-semibold py-2 px-3 rounded-md transition-colors ${copyButtonText === '¡Copiado!' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                            {copyButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>
                {`
                @keyframes fade-in-scale {
                    from {
                        transform: scale(0.95);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                `}
            </style>
        </div>
    );
};

export default ProductDetailPage;