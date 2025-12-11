
import React, { useState, useRef, useEffect } from 'react';
import type { View } from './types';
import type { Currency } from './currency';

// Social Icons
const ThreadsIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8.01 3.51c-1.35 0-2.45 1.1-2.45 2.45v.38c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-.38c0-.69.56-1.25 1.25-1.25h.19c.69 0 1.25.56 1.25 1.25v2.87c0 1.35-1.1 2.45-2.45 2.45h-.87c-.28 0-.5.22-.5.5v1.5c0 .28.22.5.5.5h.87c2.21 0 4-1.79 4-4V5.96c0-1.35-1.1-2.45-2.45-2.45h-2.12zm-3.09 3.1h-1.5c-.28 0-.5.22-.5.5v.38c0 1.35 1.1 2.45 2.45 2.45h.19c.69 0 1.25-.56 1.25-1.25V5.96c0-1.35-1.1-2.45-2.45-2.45H3.01c-1.35 0-2.45 1.1-2.45 2.45v2.12c0 2.21 1.79 4 4 4h.87c.28 0 .5-.22.5-.5v-1.5c0-.28-.22-.5-.5-.5h-.87c-.69 0-1.25-.56-1.25-1.25v-.38c0-.28-.22-.5-.5-.5z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" clipRule="evenodd" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CartIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Helper Components
const NavLinkBar = ({ children, onClick, href }: { children?: React.ReactNode, onClick?: () => void, href?: string }) => {
    if (href) {
        return (
            <a href={href} className="h-full px-5 flex items-center hover:bg-gray-900 hover:text-brand-purple transition-colors uppercase">
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className="h-full px-5 flex items-center hover:bg-gray-900 hover:text-brand-purple transition-colors uppercase">
            {children}
        </button>
    );
};

const MobileNavLink = ({ children, onClick, href, className = "" }: any) => {
    const baseClass = `block w-full text-left px-4 py-3 font-bold text-black hover:bg-gray-50 rounded-lg transition-colors uppercase ${className}`;
    if (href) {
        return <a href={href} className={baseClass}>{children}</a>
    }
    return <button onClick={onClick} className={baseClass}>{children}</button>
}

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currency, onCurrencyChange, cartCount, onCartClick }) => {
    const [cartPulse, setCartPulse] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        if (cartCount > 0) {
            setCartPulse(true);
            const timer = setTimeout(() => setCartPulse(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cartCount]);
    
    const handleMobileNav = (view: View, payload?: any) => {
        onNavigate(view, payload);
        setIsMobileMenuOpen(false);
    }

    const shopCategories = [
        { label: 'Cuidado Facial', payload: 'skincare' },
        { label: 'Maquillaje', payload: 'makeup' },
        { label: 'Fragancias', payload: 'perfume' },
        { label: 'Wellness', payload: 'wellness' },
        { label: 'Cuidado del Cabello', payload: 'hair' },
        { label: 'Cuidado Personal', payload: 'personal-care' },
        { label: 'Hombre', payload: 'men' },
        { label: 'Accesorios', payload: 'accessories' },
    ];

    const makeupMenuData = [
        { title: 'ROSTRO', items: ['Base de Maquillaje', 'Correctores', 'Polvos', 'Coloretes', 'Iluminadores', 'Prebases'] },
        { title: 'OJOS', items: ['Máscara de Pestañas', 'Delineadores', 'Sombras de Ojos', 'Cejas', 'Lápiz de Ojos'] },
        { title: 'LABIOS', items: ['Barras de Labios', 'Bálsamos', 'Perfiladores', 'Brillos de Labios'] },
        { title: 'UÑAS', items: ['Esmaltes', 'Tratamientos', 'Quitaesmalte'] }
    ];

    const fragranceMenuData = [
        { title: 'MUJER', items: ['Perfumes', 'Eau de Toilette', 'Brumas Corporales', 'Roll-on'] },
        { title: 'HOMBRE', items: ['Perfumes', 'Eau de Toilette', 'Colonias', 'Desodorantes'] },
        { title: 'COLECCIONES', items: ['Giordani Gold', 'Divine', 'Possess', 'Eclat', 'Love Nature'] },
        { title: 'TIPOS', items: ['Floral', 'Oriental', 'Amaderada', 'Frutal', 'Cítrica'] }
    ];

    return (
        <header className="sticky top-0 z-30 transition-all duration-300 font-sans shadow-md">
            {/* Super Slim Top Bar - Modified to Pink */}
            <div className="bg-pink-100 text-black py-1 text-[11px] font-medium tracking-wide border-b border-pink-200">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <span className="cursor-pointer hover:text-brand-purple transition-colors" aria-label="Threads"><ThreadsIcon /></span>
                        <span className="cursor-pointer hover:text-brand-purple transition-colors" aria-label="Instagram"><InstagramIcon /></span>
                        <span className="cursor-pointer hover:text-brand-purple transition-colors" aria-label="Facebook"><FacebookIcon /></span>
                        <span className="cursor-pointer hover:text-brand-purple transition-colors" aria-label="WhatsApp"><WhatsAppIcon /></span>
                    </div>
                    <div className="hidden md:block text-center uppercase text-black">
                        <span className="font-bold text-brand-purple-dark">BLACK FRIDAY</span> | ENVÍO GRATIS +35€
                    </div>
                    <div className="w-10"></div>
                </div>
            </div>

            <div className="bg-white w-full relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Compacted Header Height: h-14 md:h-16 */}
                    <div className="flex items-center justify-between py-1 h-14 md:h-16">
                        
                        {/* Left Actions */}
                        <div className="flex items-center w-1/3">
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                                className="md:hidden p-2 -ml-2 text-black"
                                aria-label="Menú"
                            >
                                <MenuIcon />
                            </button>
                            <div className="hidden md:flex items-center space-x-3">
                                <select
                                    value={currency}
                                    onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                                    className="text-xs font-bold bg-transparent border-none focus:ring-0 cursor-pointer hover:text-gray-600"
                                    aria-label="Moneda"
                                >
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>
                        </div>

                        {/* Center Logo - Increased Size */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <form action="https://vellaperfumeria.com" method="GET" target="_top">
                                <button type="submit" className="block hover:opacity-80 transition-opacity">
                                    <img 
                                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                                        alt="Vellaperfumeria" 
                                        className="h-16 md:h-24 w-auto" 
                                    />
                                </button>
                            </form>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center justify-end w-1/3 gap-4">
                            <button onClick={onCartClick} className="relative text-black hover:text-brand-purple transition-colors group" aria-label="Carrito">
                                <CartIcon />
                                {cartCount > 0 && (
                                    <span className={`absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors ${cartPulse ? 'animate-pop' : ''}`}>
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FULL WIDTH MEGA MENU BAR - BLACK BACKGROUND */}
            <div className="hidden md:block w-full bg-black text-white border-t border-gray-900 shadow-md relative z-40">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-center items-center h-10 text-xs font-bold tracking-widest static">
                         <NavLinkBar href="https://vellaperfumeria.com">Inicio</NavLinkBar>
                         
                         {/* TIENDA MEGA MENU */}
                         <div className="static group h-full">
                            <button 
                                onClick={() => onNavigate('products', 'all')}
                                className="h-full px-5 flex items-center gap-1 hover:bg-gray-900 hover:text-brand-purple transition-colors uppercase"
                            >
                                Tienda
                                <ChevronDownIcon />
                            </button>
                            
                            {/* Mega Menu Dropdown - Full Width */}
                            <div className="absolute left-0 top-full w-full bg-black border-t border-gray-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="container mx-auto px-4 py-8">
                                    <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                                         <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onNavigate('products', 'all');
                                            }}
                                            className="text-left group/item"
                                        >
                                            <span className="block text-brand-purple font-bold text-sm mb-1 group-hover/item:underline">VER TODO</span>
                                            <span className="text-gray-400 text-xs">Explora nuestro catálogo completo.</span>
                                        </button>

                                        {shopCategories.map((cat) => (
                                            <button
                                                key={cat.label}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onNavigate('products', cat.payload);
                                                }}
                                                className="text-left group/item"
                                            >
                                                <span className="block text-white font-bold text-sm mb-1 group-hover/item:text-brand-purple transition-colors">{cat.label}</span>
                                                <span className="text-gray-500 text-xs block group-hover/item:text-gray-300 transition-colors">Descubre lo mejor en {cat.label.toLowerCase()}.</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         </div>

                         {/* MAQUILLAJE MEGA MENU - Featured/Pop */}
                         <div className="static group h-full">
                            <button 
                                onClick={() => onNavigate('products', 'makeup')}
                                className="h-full px-5 flex items-center gap-1 hover:bg-gray-900 text-amber-200 hover:text-amber-100 transition-colors uppercase font-bold tracking-widest relative"
                            >
                                Maquillaje
                                <ChevronDownIcon />
                            </button>
                            
                            <div className="absolute left-0 top-full w-full bg-black border-t border-gray-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="container mx-auto px-4 py-10">
                                    <div className="flex flex-row">
                                        {/* Left: Categories */}
                                        <div className="flex-grow grid grid-cols-4 gap-8 border-r border-gray-800 pr-8">
                                            {makeupMenuData.map((cat) => (
                                                <div key={cat.title} className="space-y-4">
                                                    <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3 border-b border-gray-800 pb-2">{cat.title}</h4>
                                                    <ul className="space-y-2">
                                                        {cat.items.map(item => (
                                                            <li key={item}>
                                                                <button 
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        onNavigate('products', 'makeup');
                                                                    }}
                                                                    className="text-gray-400 hover:text-white text-xs transition-colors text-left block hover:translate-x-1 duration-200"
                                                                >
                                                                    {item}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Right: Featured "Pom" Content */}
                                        <div className="w-1/3 pl-10 flex items-center justify-center relative overflow-hidden group/featured">
                                             <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent rounded-xl"></div>
                                             <div className="text-center relative z-10 p-6">
                                                 <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 block">Destacado</span>
                                                 <img 
                                                    src="https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F34545%2F34545_1.png" 
                                                    alt="Giordani Gold" 
                                                    className="h-48 w-auto object-contain mx-auto mb-4 drop-shadow-2xl transform group-hover/featured:scale-110 transition-transform duration-700"
                                                 />
                                                 <h3 className="text-white font-serif text-2xl italic mb-2">Giordani Gold</h3>
                                                 <p className="text-gray-400 text-xs mb-6 max-w-xs mx-auto">La fusión perfecta entre cuidado de la piel y maquillaje de lujo.</p>
                                                 <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onNavigate('products', 'makeup');
                                                    }}
                                                    className="px-8 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all uppercase text-xs font-bold tracking-widest rounded-sm"
                                                 >
                                                    Descubrir
                                                 </button>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                         {/* FRAGANCIAS MEGA MENU */}
                         <div className="static group h-full">
                            <button 
                                onClick={() => onNavigate('products', 'perfume')}
                                className="h-full px-5 flex items-center gap-1 hover:bg-gray-900 hover:text-brand-purple transition-colors uppercase"
                            >
                                Fragancias
                                <ChevronDownIcon />
                            </button>
                            
                            <div className="absolute left-0 top-full w-full bg-black border-t border-gray-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="container mx-auto px-4 py-8">
                                    <div className="grid grid-cols-4 gap-8">
                                        {fragranceMenuData.map((cat) => (
                                            <div key={cat.title} className="space-y-4">
                                                <h4 className="text-brand-purple font-bold text-sm uppercase tracking-wider mb-2 border-b border-gray-800 pb-2">{cat.title}</h4>
                                                <ul className="space-y-2">
                                                    {cat.items.map(item => (
                                                        <li key={item}>
                                                            <button 
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    onNavigate('products', 'perfume');
                                                                }}
                                                                className="text-gray-400 hover:text-white text-xs transition-colors text-left block hover:translate-x-1 duration-200"
                                                            >
                                                                {item}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         </div>

                         <NavLinkBar onClick={() => onNavigate('ofertas')}>Ofertas</NavLinkBar>
                         <NavLinkBar onClick={() => onNavigate('catalog')}>Catálogo</NavLinkBar>
                         <NavLinkBar onClick={() => onNavigate('blog')}>Blog</NavLinkBar>
                         <NavLinkBar onClick={() => onNavigate('ia')}>Asistente IA</NavLinkBar>
                         <NavLinkBar onClick={() => onNavigate('contact')}>Ayuda</NavLinkBar>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-4 h-[80vh] overflow-y-auto">
                    <MobileNavLink href="https://vellaperfumeria.com">Inicio</MobileNavLink>
                    <MobileNavLink onClick={() => handleMobileNav('products', 'all')}>Tienda (Ver Todo)</MobileNavLink>
                    {shopCategories.map(cat => (
                         <button
                            key={cat.label}
                            onClick={() => handleMobileNav('products', cat.payload)}
                            className="block w-full text-left px-8 py-3 text-sm text-gray-600 hover:text-brand-purple transition-colors border-b border-gray-50 last:border-0"
                        >
                            {cat.label}
                        </button>
                    ))}
                    <MobileNavLink onClick={() => handleMobileNav('ofertas')}>Ofertas</MobileNavLink>
                    <MobileNavLink onClick={() => handleMobileNav('catalog')}>Catálogo</MobileNavLink>
                    <MobileNavLink onClick={() => handleMobileNav('blog')}>Blog</MobileNavLink>
                    <MobileNavLink onClick={() => handleMobileNav('ia')}>Asistente IA</MobileNavLink>
                    <MobileNavLink onClick={() => handleMobileNav('contact')}>Ayuda</MobileNavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
