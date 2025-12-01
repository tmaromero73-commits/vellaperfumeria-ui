import React, { useState, useMemo, useEffect } from 'react';
import ProductList from './components/ProductList';
import AlgaePage from './components/AlgaePage';
import ProductDetailPage from './components/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import type { Currency } from './components/currency';
import type { Product } from './components/ProductCard';
import OfertasPage from './components/OfertasPage';
import AsistenteIAPage from './components/AsistenteIAPage';
import CatalogPage from './components/CatalogPage';
import Header from './components/Header';
import Footer from './components/Footer';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);

export type View = 'home' | 'products' | 'about' | 'contact' | 'algas' | 'productDetail' | 'ofertas' | 'ia' | 'catalog';

export interface CartItem {
    product: Product;
    quantity: number;
}

const CART_STORAGE_KEY = 'vellaperfumeria_cart';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
        return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
      try {
          localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      } catch (error) {
          console.error('Failed to save cart to localStorage', error);
      }
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };
  
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    handleNavigate('productDetail');
  };

  const handleAddToCart = (product: Product, buttonElement?: HTMLButtonElement) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === product.id);
        if (existingItem) {
            return prevItems.map(item => 
                item.product.id === product.id 
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        }
        return [...prevItems, { product, quantity: 1 }];
    });

    // Shake the cart icon
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('shake');
        setTimeout(() => cartIcon.classList.remove('shake'), 820);
    }

    if (buttonElement) {
      // Provide feedback on the button
      const originalText = buttonElement.innerHTML;
      buttonElement.innerHTML = 'Añadido! ✔️';
      buttonElement.classList.remove('bg-[#EBCFFC]', 'hover:bg-[#e0c2fa]', 'text-black');
      buttonElement.classList.add('bg-green-500', 'text-white', 'cursor-not-allowed');
      buttonElement.disabled = true;

      // Reset button state after a delay
      setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.classList.add('bg-[#EBCFFC]', 'hover:bg-[#e0c2fa]', 'text-black');
          buttonElement.classList.remove('bg-green-500', 'text-white', 'cursor-not-allowed');
          buttonElement.disabled = false;
      }, 1200); 
    }
  };
  
  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
      if (newQuantity <= 0) {
          // If quantity is 0 or less, remove the item
          setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
      } else {
          setCartItems(prevItems => prevItems.map(item => 
              item.product.id === productId ? { ...item, quantity: newQuantity } : item
          ));
      }
  };
  
  const handleRemoveFromCart = (productId: number) => {
      setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    console.log('--- Iniciando Proceso de Pago ---');
    console.log('Artículos en el carrito:', cartItems);
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    console.log(`Total a pagar: ${total.toFixed(2)} EUR`);
    alert('¡Gracias por tu compra! (Esto es una simulación)\n\nEl carrito se vaciará ahora.');
    
    setCartItems([]);
    setIsCartOpen(false);
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <main className="flex-grow">
        {currentView === 'home' && (
           <section className="text-center py-24">
                <img src="https://i.imgur.com/sFo732c.png" alt="Vellaperfumeria Logo" className="w-48 h-48 mx-auto mb-8" />
                <button
                    onClick={() => handleNavigate('products')}
                    className="bg-[#EBCFFC] text-black font-bold py-3 px-12 rounded-lg hover:bg-[#e0c2fa] transition-colors"
                >
                    TIENDA
                </button>
            </section>
        )}
        {currentView === 'products' && 
          <div className="py-8 px-4">
            <ProductList 
                currency={currency} 
                onAddToCart={handleAddToCart}
                onProductSelect={handleProductSelect}
                onNavigate={handleNavigate}
            />
          </div>
        }
        {currentView === 'catalog' && 
          <div className="py-8 px-4">
            <CatalogPage 
                currency={currency} 
                onAddToCart={handleAddToCart}
                onProductSelect={handleProductSelect}
            />
          </div>
        }
        {currentView === 'ofertas' && 
          <div className="py-8 px-4">
            <OfertasPage 
                currency={currency} 
                onAddToCart={handleAddToCart}
                onProductSelect={handleProductSelect}
            />
          </div>
        }
        {currentView === 'productDetail' && selectedProduct && (
            <div className="py-8 px-4">
                <ProductDetailPage 
                    product={selectedProduct}
                    currency={currency}
                    onAddToCart={handleAddToCart}
                    onBack={() => handleNavigate('products')}
                />
            </div>
        )}
        {currentView === 'about' && (
            <div className="container mx-auto text-center py-10 px-4">
                <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
                <p className="text-black">Contenido sobre nosotros próximamente...</p>
            </div>
        )}
        {currentView === 'contact' && (
            <div className="container mx-auto text-center py-10 px-4">
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                <p className="text-black">Información de contacto próximamente...</p>
            </div>
        )}
        {currentView === 'algas' && <AlgaePage currency={currency}/>}
        {currentView === 'ia' && <AsistenteIAPage />}
      </main>
      
      <a
        href="https://wa.me/661202616"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-30"
      >
        <WhatsAppIcon />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
      <Footer />
    </div>
  );
};

export default App;