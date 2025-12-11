
import React, { useEffect, useMemo } from 'react';
import type { CartItem, View } from './types';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

interface CheckoutPageProps {
    cartItems: CartItem[];
    currency: Currency;
    onClearCart: () => void;
    onNavigate: (view: View, payload?: any) => void;
}

const GooglePayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.6 18.5" className="h-6 w-auto" aria-label="Google Pay">
        <path fill="#4285F4" d="M7.1,8.4c0-0.6,0-1.1-0.1-1.7h-7v3.2h4c-0.2,1-0.7,1.9-1.5,2.4v2h2.4C7,13.1,7.9,10.9,7.9,8.4L7.1,8.4z"/>
        <path fill="#34A853" d="M7,15.7c2,0,3.7-0.7,4.9-1.8l-2.4-2c-0.7,0.5-1.5,0.7-2.5,0.7c-1.9,0-3.5-1.3-4.1-3l-2.5,0v2C1.6,14.2,4.1,15.7,7,15.7z"/>
        <path fill="#FBBC05" d="M2.9,9.7c-0.1-0.4-0.2-0.9-0.2-1.4c0-0.5,0.1-0.9,0.2-1.4l0-2l-2.5,0C0.2,4.2,0,5.1,0,6s0.2,1.8,0.5,2.6L2.9,9.7z"/>
        <path fill="#EA4335" d="M7,4.6c1.1,0,2.1,0.4,2.9,1.1l2.1-2.1C10.7,2.4,9,1.6,7,1.6C4.1,1.6,1.6,3.2,0.4,5.6l2.5,2C3.5,5.9,5.1,4.6,7,4.6z"/>
        <path fill="#5F6368" d="M13.6,7.6h1.8v7.9h-1.8V7.6z M19.5,7.6h1.8v7.9h-1.8V7.6z M25.5,7.6h1.7l-2.7,6.1l-2.8-6.1h1.9l1.8,4.3L25.5,7.6z M31.4,7.6h-1.8v7.9h1.8V7.6z"/>
        <path fill="#5F6368" d="M36,4.7c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1S34.3,4.7,36,4.7z M36,6.4c-0.8,0-1.4,0.7-1.4,1.4s0.7,1.4,1.4,1.4s1.4-0.7,1.4-1.4S36.8,6.4,36,6.4z"/>
        <path fill="#5F6368" d="M45.4,7.6v7.9h-1.6v-1.2c-0.5,0.9-1.3,1.4-2.3,1.4c-1.6,0-2.7-1.1-2.7-2.8c0-1.7,1.1-2.9,2.8-2.9c0.9,0,1.7,0.5,2,1.1V7.6H45.4z M41.5,9.9c-0.8,0-1.4,0.7-1.4,1.4s0.6,1.4,1.4,1.4s1.4-0.7,1.4-1.4S42.3,9.9,41.5,9.9z"/>
    </svg>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, currency, onNavigate }) => {
    // URL ESTÁNDAR de WooCommerce según la estructura de bloques
    const CHECKOUT_BASE_URL = 'https://vellaperfumeria.com/checkout/';

    // Generar la URL con los parámetros para añadir al carrito y el parámetro 'v' solicitado
    const checkoutUrl = useMemo(() => {
        if (cartItems.length === 0) return CHECKOUT_BASE_URL;

        const productIds: number[] = [];
        
        cartItems.forEach(item => {
            let idToAdd = item.product.id;

            // Priorizar ID de la variante si existe (para productos con talla/color)
            if (item.selectedVariant && item.product.variants) {
                Object.entries(item.selectedVariant).forEach(([key, value]) => {
                    const variantOptions = item.product.variants?.[key];
                    if (variantOptions) {
                        const selectedOption = variantOptions.find(opt => opt.value === value);
                        if (selectedOption && selectedOption.variationId) {
                            idToAdd = selectedOption.variationId;
                        }
                    }
                });
            }

            // Añadir el ID a la lista tantas veces como la cantidad solicitada.
            for (let i = 0; i < item.quantity; i++) {
                productIds.push(idToAdd);
            }
        });
        
        // Unimos todos los IDs con comas.
        const queryParam = productIds.join(',');
        const separator = CHECKOUT_BASE_URL.includes('?') ? '&' : '?';
        
        // Añadimos el parámetro 'v' que solicitaste para el seguimiento
        return `${CHECKOUT_BASE_URL}${separator}add-to-cart=${queryParam}&v=12470fe406d4`;
    }, [cartItems]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleProceedToCheckout = () => {
        window.location.href = checkoutUrl;
    };

    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const hasShippingSaver = cartItems.some(item => item.product.isShippingSaver);
    const shippingCost = subtotal >= 35 || hasShippingSaver ? 0 : 6.00;
    const total = subtotal + shippingCost;

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="mb-4 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
                <button 
                    onClick={() => onNavigate('products', 'all')}
                    className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-black transition-colors"
                >
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-extrabold text-brand-primary mb-4">Resumen del Pedido</h1>
                <p className="text-gray-600">Revisa tus productos y elige tu método de pago.</p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8 bg-gray-50 border-b">
                    <h2 className="text-xl font-bold mb-4">Tu Cesta</h2>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                         {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-3 rounded-lg border shadow-sm">
                                <div className="relative flex-shrink-0">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-contain" />
                                    <span className="absolute -top-2 -right-2 bg-brand-purple text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm">{item.product.name}</h3>
                                    {item.selectedVariant && (
                                        <p className="text-xs text-gray-500">{Object.entries(item.selectedVariant).map(([k, v]) => `${k}: ${v}`).join(', ')}</p>
                                    )}
                                </div>
                                <div className="text-right font-bold text-brand-primary text-sm whitespace-nowrap">
                                    {formatCurrency(item.product.price * item.quantity, currency)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="p-6 md:p-8">
                    <div className="space-y-2 mb-8 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal, currency)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Envío</span>
                            <span className={shippingCost === 0 ? "text-green-600 font-bold" : ""}>
                                {shippingCost === 0 ? 'Gratis' : formatCurrency(shippingCost, currency)}
                            </span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-black pt-4 border-t mt-2">
                            <span>Total Estimado</span>
                            <span>{formatCurrency(total, currency)}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Botón Google Pay */}
                        <button 
                            onClick={handleProceedToCheckout}
                            className="w-full bg-black text-white font-bold py-3.5 rounded-xl text-lg shadow-md hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2 border border-gray-800"
                            aria-label="Pagar con Google Pay"
                        >
                           <GooglePayIcon />
                           <span className="ml-2">Pagar ahora</span>
                        </button>

                        {/* Separador */}
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">O pagar con tarjeta</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <button 
                            onClick={handleProceedToCheckout}
                            className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-3"
                        >
                            <span>Continuar al Pago Seguro</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        
                        <div className="text-center mt-4">
                            <p className="text-xs text-gray-500 mb-2">
                                Serás redirigido a <strong>vellaperfumeria.com</strong> para completar el pago de forma segura. El dinero se procesará a través de la pasarela oficial de la tienda.
                            </p>
                             <div className="flex justify-center gap-2 text-gray-400 opacity-70 mt-2">
                                <svg className="h-6" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="24" rx="2" fill="#F5F5F5"/><path d="M15.5 15.5L13.5 4.5H11.5L9 10.5L7.5 6.5L7 4.5H5L8.5 15.5H11L13 9.5L14.5 4.5H15.5V15.5Z" fill="#1A1F71"/></svg>
                                <svg className="h-6" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="24" rx="2" fill="#F5F5F5"/><circle cx="13" cy="12" r="7" fill="#EB001B"/><circle cx="25" cy="12" r="7" fill="#F79E1B"/><path d="M19 16.4C20.3 15.4 21.2 13.8 21.2 12C21.2 10.2 20.3 8.6 19 7.6C17.7 8.6 16.8 10.2 16.8 12C16.8 13.8 17.7 15.4 19 16.4Z" fill="#FF5F00"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1; 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db; 
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af; 
                }
            `}</style>
        </div>
    );
};

export default CheckoutPage;
