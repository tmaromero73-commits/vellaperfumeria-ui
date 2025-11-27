import React, { useEffect, useMemo, useRef } from 'react';
import type { CartItem } from '../App';
import type { Currency } from './currency';
import { formatCurrency } from './currency';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    currency: Currency;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemoveItem: (productId: number) => void;
    onCheckout: () => void;
}

const CloseIcon = () => (
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, currency, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    
    // Close sidebar on "Escape" key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Trap focus within the sidebar when open for accessibility
    useEffect(() => {
        if (!isOpen || !sidebarRef.current) return;

        const focusableElements = sidebarRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                if (event.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        event.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        event.preventDefault();
                    }
                }
            }
        };

        firstElement?.focus();
        sidebarRef.current.addEventListener('keydown', handleTabKeyPress);
        return () => sidebarRef.current?.removeEventListener('keydown', handleTabKeyPress);

    }, [isOpen]);

    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }, [cartItems]);
    
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-heading"
            className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} aria-hidden="true" />

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 id="cart-heading" className="text-xl font-bold tracking-wide">Tu Carrito</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Cerrar carrito">
                        <CloseIcon />
                    </button>
                </div>

                {/* Cart Content */}
                {cartItems.length > 0 ? (
                    <div className="flex-grow overflow-y-auto p-4">
                        <ul className="space-y-4">
                            {cartItems.map(item => (
                                <li key={item.product.id} className="flex items-center gap-4">
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-contain rounded-md border" />
                                    <div className="flex-grow">
                                        <p className="font-semibold">{item.product.name}</p>
                                        <p className="text-sm text-black/80">{formatCurrency(item.product.price, currency)}</p>
                                        <div className="flex items-center mt-2">
                                            <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-0.5 border rounded-l-md hover:bg-gray-100">-</button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value, 10) || 1)}
                                                className="w-12 text-center border-t border-b"
                                                aria-label={`Cantidad para ${item.product.name}`}
                                            />
                                            <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-0.5 border rounded-r-md hover:bg-gray-100">+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => onRemoveItem(item.product.id)} className="text-gray-400 hover:text-red-500 p-1" aria-label={`Eliminar ${item.product.name} del carrito`}>
                                        <TrashIcon />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-black">Tu carrito está vacío.</p>
                        <p className="text-sm text-black/60 mt-1">¡Añade productos para empezar!</p>
                    </div>
                )}
                

                {/* Footer */}
                {cartItems.length > 0 && (
                     <div className="p-4 border-t space-y-4 bg-gray-50">
                        <div className="flex justify-between font-semibold">
                            <span>Subtotal</span>
                            <span>{formatCurrency(subtotal, currency)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>{formatCurrency(subtotal, currency)} {currency}</span>
                        </div>
                        <button
                            onClick={onCheckout}
                            className="w-full bg-[#EBCFFC] text-black font-bold py-3 rounded-lg hover:bg-[#e0c2fa] transition-colors"
                        >
                            Finalizar Pedido
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;