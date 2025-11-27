import React from 'react';

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.663 118.663 0 0112 2.163zm0 1.442c-3.143 0-3.509.011-4.72.067-2.694.123-3.997 1.433-4.12 4.12C3.109 9.12 3.098 9.486 3.098 12c0 2.514.011 2.88.067 4.72.123 2.686 1.427 3.996 4.12 4.12 1.21.055 1.577.067 4.72.067 3.143 0 3.509-.011 4.72-.067 2.694-.123 3.997-1.433 4.12-4.12.056-1.84.067-2.206.067-4.72 0-2.514-.011-2.88-.067-4.72-.123-2.686-1.427-3.996-4.12-4.12-1.21-.055-1.577.067-4.72-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM18.88 6.54a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" clipRule="evenodd" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.475 5.422 5.571-1.469z" />
    </svg>
);


const Footer: React.FC = () => {
    const oriflameCatalogUrl = "https://shop.oriflame.com/ES-beautieshopvella/T4dM9qzl";

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left space-y-10 md:space-y-0">
                    {/* About Section */}
                    <div className="w-full md:w-1/3">
                        <a href={oriflameCatalogUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity mb-4">
                             <img src="https://i.imgur.com/sFo732c.png" alt="Vellaperfumeria Logo" className="w-24 h-auto mx-auto md:mx-0" />
                        </a>
                        <p className="text-gray-400 text-sm">
                            Descubre fragancias que definen tu esencia. Calidad y exclusividad en cada botella.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-bold tracking-widest uppercase mb-4">Enlaces Rápidos</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href={oriflameCatalogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href={oriflameCatalogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Tienda</a></li>
                            <li><a href={oriflameCatalogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                            <li><a href={oriflameCatalogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-bold tracking-widest uppercase mb-4">Síguenos</h2>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.instagram.com/vellaperfumeria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.facebook.com/vellaperfumeria" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                                <FacebookIcon />
                            </a>
                            <a href="https://wa.me/661202616" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors">
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-center text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} VELLAPERFUMERIA. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;