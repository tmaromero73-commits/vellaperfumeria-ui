import React, { useState } from 'react';
import { type Currency, formatCurrency } from './currency';

// Define the shape of a shipping option
interface ShippingOption {
    id: number;
    name: string;
    time: string;
    cost: number;
}

// Define the available shipping options (cost is in EUR)
const shippingOptions: ShippingOption[] = [
    { id: 1, name: 'Precio fijo', time: '5-7 días laborables', cost: 6.00 },
    { id: 2, name: 'Envío Express', time: '1-2 días laborables', cost: 9.50 },
    { id: 3, name: 'Recogida en Tienda', time: 'Disponible en 24h', cost: 0.00 },
];

const subtotal = 5.93; // Price in EUR


const AlgaePage: React.FC<{ currency: Currency }> = ({ currency }) => {
    // State to track the selected shipping option
    const [selectedShippingId, setSelectedShippingId] = useState<number>(shippingOptions[0].id);

    // Find the currently selected shipping option object
    const selectedShippingOption = shippingOptions.find(option => option.id === selectedShippingId) || shippingOptions[0];

    // Calculate the total price in EUR
    const total = subtotal + selectedShippingOption.cost;

    return (
        <div className="bg-gray-50 text-gray-800">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl font-bold mb-4 text-black">Divine</h1>
                        <p className="text-xl text-black mb-6">Descubre Tu Aroma Característico. Explora un mundo de fragancias exquisitas. Encuentra el aroma perfecto que cuenta tu historia, elaborado con pasión y los mejores ingredientes.</p>
                        <button className="bg-[#EBCFFC] text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#e0c2fa] transition-colors">
                            Comprar Divine
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://i.imgur.com/L4yqY4x.png" alt="Perfume Divine" className="rounded-lg shadow-2xl mx-auto" />
                    </div>
                </section>

                {/* The Trajectory of Algae in Skincare */}
                <section className="mb-16">
                    <p className="text-center text-black mb-8 max-w-3xl mx-auto">Desde remedios ancestrales hasta biotecnología de vanguardia, las algas tienen una rica historia en el bienestar y la belleza humana.</p>
                    <h2 className="text-3xl font-bold text-center mb-8">La Trayectoria de las Algas en el Cuidado de la piel</h2>
                    <div className="relative border-l-2 border-rose-200 ml-4 md:mx-auto md:max-w-2xl">
                        {/* Timeline Item 1 */}
                        <div className="mb-8 pl-8 relative before:absolute before:left-[-11px] before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-rose-500 before:rounded-full before:border-4 before:border-white">
                            <h3 className="font-bold text-xl text-rose-700">Primeras Adopciones</h3>
                            <p className="text-black mt-2">Antiguos egipcios y romanos reconocieron las propiedades calmantes y curativas de las algas, incorporándolas en baños y tratamientos para la piel. Los baños de algas marinas eran comunes para la desintoxicación y nutrición de la piel.</p>
                        </div>
                        {/* Timeline Item 2 */}
                        <div className="mb-8 pl-8 relative before:absolute before:left-[-11px] before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-rose-500 before:rounded-full before:border-4 before:border-white">
                            <h3 className="font-bold text-xl text-rose-700">Siglos XVIII – XIX: Exploración Científica</h3>
                            <p className="text-black mt-2">La comunidad científica comenzó a estudiar las algas de forma más sistemática. La talasoterapia, que utiliza agua de mar y productos marinos como las algas para beneficios de salud, ganó popularidad en las regiones costeras europeas.</p>
                        </div>
                        {/* Timeline Item 3 */}
                        <div className="mb-8 pl-8 relative before:absolute before:left-[-11px] before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-rose-500 before:rounded-full before:border-4 before:border-white">
                            <h3 className="font-bold text-xl text-rose-700">Siglo XX: Comercialización e Investigación</h3>
                            <p className="text-black mt-2">La industria de la belleza comenzó a incorporar extractos de algas en productos comerciales. La investigación destacó el rico contenido de vitaminas, minerales y antioxidantes de las algas, lo que llevó a formulaciones más sofisticadas.</p>
                        </div>
                        {/* Timeline Item 4 */}
                        <div className="pl-8 relative before:absolute before:left-[-11px] before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-rose-500 before:rounded-full before:border-4 before:border-white">
                            <h3 className="font-bold text-xl text-rose-700">Siglo XXI – Actualidad: La Revolución del Color y Biotecnología</h3>
                            <p className="text-black mt-2">La biotecnología avanzada desbloquea nuevos potenciales de las algas, incluyendo pigmentos vibrantes como la astaxantina y la ficocianina, conocidos por sus potentes beneficios antioxidantes y antiinflamatorios. Los métodos de cultivo sostenible hacen de las algas un ingrediente clave en el cuidado de la piel eco-consciente moderno.</p>
                        </div>
                    </div>
                </section>
                
                {/* Algae Through the Ages */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-2">Las Algas a Través de los Tiempos</h2>
                    <p className="text-center text-black mb-8 max-w-3xl mx-auto">Un viaje visual que muestra el papel evolutivo de las algas en el cuidado de la piel y la belleza.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <img src="https://i.imgur.com/8aM0XgM.jpg" alt="Bienestar Ancestral" className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                            <h4 className="font-semibold">Bienestar Ancestral</h4>
                        </div>
                        <div className="text-center">
                            <img src="https://i.imgur.com/YVpQ2Bk.jpg" alt="Botica Victoriana" className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                            <h4 className="font-semibold">Botica Victoriana</h4>
                        </div>
                        <div className="text-center">
                            <img src="https://i.imgur.com/rG7P8kG.jpg" alt="Belleza Moderna de Mediados de Siglo" className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                            <h4 className="font-semibold">Belleza Moderna</h4>
                        </div>
                        <div className="text-center">
                            <img src="https://i.imgur.com/3pL4oGq.jpg" alt="Cuidado de la Piel Futurista" className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                            <h4 className="font-semibold">Cuidado de la Piel Futurista</h4>
                        </div>
                    </div>
                </section>

                {/* Algae Benefit Explorer */}
                <section className="bg-rose-100 rounded-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4">Explorador de Beneficios de Algas</h2>
                    <p className="text-center text-black mb-6">Desbloquea los secretos de diferentes variedades de algas. Ingresa un tipo de alga (ej., «Espirulina», «Kelp», «Chlorella») para conocer sus beneficios para el cuidado de la piel.</p>
                    <div className="max-w-md mx-auto flex gap-2">
                        <input type="text" placeholder="Tipo de Alga" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" />
                        <button className="bg-[#EBCFFC] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#e0c2fa] transition-colors">
                            Obtener Beneficios
                        </button>
                    </div>
                </section>

                {/* Skincare Techniques */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-2">Técnicas de Cuidado de la Piel con Algas</h2>
                    <p className="text-center text-black mb-8 max-w-3xl mx-auto">Explora diversas formas en que se utilizan las algas en las rutinas y tratamientos de cuidado de la piel para obtener resultados óptimos.</p>
                     <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Mascarillas Faciales</h3>
                            <p>Tratamientos caseros sencillos utilizando algas en polvo como espirulina o kelp mezcladas con agua, miel o yogur para un impulso de nutrientes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Envolturas Corporales</h3>
                            <p>Utilizadas en spas para desintoxicar y nutrir la piel de todo el cuerpo, dejándola suave y revitalizada.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Sérums Infusionados</h3>
                            <p>Fórmulas concentradas que entregan los potentes antioxidantes y minerales de las algas directamente a la piel.</p>
                        </div>
                    </div>
                </section>

                {/* Diversity Section */}
                 <section className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-8 rounded-lg shadow-lg">
                    <div className="md:w-1/2">
                        <img src="https://i.imgur.com/sPTC4t7.jpg" alt="Diversidad de belleza" className="rounded-lg shadow-md w-full" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Belleza en Cada Tono</h2>
                        <p className="text-lg text-black">El cuidado de la piel a base de algas es para todos. Celebramos la diversidad de la belleza y los tonos de piel.</p>
                    </div>
                </section>
                
                {/* Quick Links Section */}
                <section className="mb-16 text-center p-6 bg-gray-100 rounded-lg">
                     <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
                        <a href="#" className="font-semibold text-rose-700 hover:underline">Acerca de</a>
                        <a href="#" className="font-semibold text-rose-700 hover:underline">Ofertas destacadas</a>
                        <a href="#" className="font-semibold text-rose-700 hover:underline">Catálogo</a>
                        <a href="#" className="font-semibold text-rose-700 hover:underline">+ Información</a>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Qué dice la gente</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md italic">
                            <p className="text-black">"La forma de empezar es dejar de hablar y empezar a hacer."</p>
                            <p className="text-right font-semibold mt-4">- Walt Disney</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md italic">
                            <p className="text-black">"Son nuestras decisiones, Harry, lo que muestran quién somos, mucho más que nuestras habilidades."</p>
                            <p className="text-right font-semibold mt-4">- J. K. Rowling</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md italic">
                            <p className="text-black">"No llores porque se acabó, sonríe porque sucedió."</p>
                            <p className="text-right font-semibold mt-4">- Dr. Seuss</p>
                        </div>
                    </div>
                </section>

                {/* Checkout Form -- This is a static representation */}
                <section className="border-t-2 border-gray-200 pt-12">
                     <h2 className="text-3xl font-bold text-center mb-8">Finaliza tu compra</h2>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Side: Forms */}
                            <div>
                                <h3 className="text-xl font-bold mb-4 border-b pb-2">Información de contacto</h3>
                                <p className="text-sm text-black/60 mb-2">Usaremos este correo para enviarte detalles de tu pedido.</p>
                                <input type="email" id="checkout_email" defaultValue="tmaromero73@gmail.com" className="w-full px-3 py-2 border rounded-md mb-4" />
                                <div className="flex items-center">
                                    <input type="checkbox" id="newsletter" className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500" />
                                    <label htmlFor="newsletter" className="ml-2 block text-sm text-black">Quiero recibir emails con descuentos e información.</label>
                                </div>

                                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Dirección de envío</h3>
                                <div className="space-y-2 text-sm p-4 border rounded-md bg-gray-50">
                                    <p>Tsmara Moreno</p>
                                    <p>28760D28760 Madrid, Madrid, España</p>
                                    <p>+34661202616</p>
                                </div>
                                <button className="text-sm text-rose-600 hover:underline mt-2">Editar</button>
                                
                                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Dirección de facturación</h3>
                                <div className="border rounded-md p-4 bg-gray-50">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="same-address" defaultChecked className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500" />
                                        <label htmlFor="same-address" className="ml-2 block text-sm text-black">Usar la misma dirección para facturación</label>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Opciones de envío</h3>
                                <div className="space-y-3">
                                    {shippingOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            htmlFor={`shipping-${option.id}`}
                                            className={`border rounded-md p-4 flex justify-between items-center cursor-pointer transition-all ${selectedShippingId === option.id ? 'border-rose-500 ring-2 ring-rose-200' : 'border-gray-200'}`}
                                        >
                                            <div>
                                                <span className="font-semibold">{option.name}</span>
                                                <p className="text-sm text-black/60">{option.time}</p>
                                            </div>
                                            <span className="font-semibold">{formatCurrency(option.cost, currency, { decimals: 2 })}</span>
                                            <input
                                                type="radio"
                                                id={`shipping-${option.id}`}
                                                name="shipping"
                                                value={option.id}
                                                checked={selectedShippingId === option.id}
                                                onChange={() => setSelectedShippingId(option.id)}
                                                className="hidden"
                                            />
                                        </label>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Opciones de pago</h3>
                                 <div className="space-y-3">
                                    <div className="border rounded-md p-4">
                                        <input type="radio" id="cod" name="payment" className="h-4 w-4 text-rose-600 border-gray-300 focus:ring-rose-500" />
                                        <label htmlFor="cod" className="ml-3">Contra reembolso</label>
                                        <p className="text-sm text-black/60 ml-7">Paga en efectivo en el momento de la entrega.</p>
                                    </div>
                                    <div className="border rounded-md p-4">
                                         <input type="radio" id="card" name="payment" className="h-4 w-4 text-rose-600 border-gray-300 focus:ring-rose-500" />
                                        <label htmlFor="card" className="ml-3">Tarjeta</label>
                                        <div className="flex items-center gap-2 ml-7 mt-2">
                                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6"/>
                                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6"/>
                                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" className="h-6"/>
                                            <span className="text-xs font-semibold">+4</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">Nota del pedido (opcional)</h3>
                                <textarea placeholder="Añade una nota a tu pedido" rows={3} className="w-full px-3 py-2 border rounded-md"></textarea>

                                <p className="text-xs text-gray-500 mt-4">Al proceder con tu compra aceptas nuestros <a href="#" className="underline hover:text-rose-600">Términos y condiciones</a> y <a href="#" className="underline hover:text-rose-600">Política de privacidad</a></p>
                            </div>

                            {/* Right Side: Order Summary */}
                            <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-8">
                                <h3 className="text-xl font-bold mb-4 border-b pb-2">Resumen del pedido</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative">
                                        <img src="https://i.imgur.com/Xk9a4xG.png" alt="Lip stick" className="w-16 h-16 object-cover rounded-md" />
                                        <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Lip stick</p>
                                        <p className="text-sm text-black/60">
                                            <span className="line-through">{formatCurrency(12.00, currency, { decimals: 2 })}</span> <span className="text-red-600 font-bold">{formatCurrency(5.93, currency, { decimals: 2 })}</span>
                                        </p>
                                    </div>
                                    <p className="ml-auto font-semibold">{formatCurrency(subtotal, currency, { decimals: 2 })}</p>
                                </div>

                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <a href="#" className="text-rose-600 hover:underline">Añadir cupones</a>
                                    </div>
                                     <div className="flex justify-between text-sm">
                                        <span>Subtotal</span>
                                        <span>{formatCurrency(subtotal, currency, { decimals: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Envío ({selectedShippingOption.name})</span>
                                        <span>{formatCurrency(selectedShippingOption.cost, currency, { decimals: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                                        <span>Total</span>
                                        <span>{formatCurrency(total, currency, { decimals: 2 })} {currency}</span>
                                    </div>
                                </div>
                                
                                <button className="w-full bg-[#EBCFFC] text-black font-bold py-3 rounded-lg mt-6 hover:bg-[#e0c2fa] transition-colors">
                                    Realizar el pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Contact Form Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Contacta con nosotros</h2>
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black">Nombre <span className="text-red-500">*</span></label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
                            </div>
                             <div>
                                <label htmlFor="email_contact" className="block text-sm font-medium text-black">Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email_contact" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black">Mensaje</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#EBCFFC] text-black font-bold py-3 rounded-lg hover:bg-[#e0c2fa] transition-colors">
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AlgaePage;