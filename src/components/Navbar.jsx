import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "/src/assets/logo.png"; // ✅ IMPORTAMOS EL LOGO
import { Button } from "../components/ui/button.jsx"; // Importamos el botón de shadcn

export default function Navbar({ openCart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full relative">
            {/* Logo y categorías en desktop */}
            <div className="flex items-center space-x-6">
                <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
                    <img src={logo} alt="Arlequín Mascotas" className="h-8 w-8 mr-2" />
                    Arlequín Mascotas
                </Link>
                <div className="hidden lg:flex space-x-6">
                    <Link to="/perros" className="text-gray-600 hover:text-purple-600">Perros</Link>
                    <Link to="/gatos" className="text-gray-600 hover:text-purple-600">Gatos</Link>
                    <Link to="/accesorios" className="text-gray-600 hover:text-purple-600">Accesorios</Link>
                    <Link to="/comida" className="text-gray-600 hover:text-purple-600">Comida</Link>
                </div>
            </div>

            {/* Botón del carrito en desktop */}
            <Button onClick={openCart} className="hidden lg:flex gap-2">
                <ShoppingCart size={20} />
                Tu Carrito
            </Button>

            <button
                onClick={openCart}
                className="hidden lg:flex bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition flex items-center"
            >
                <ShoppingCart size={20} className="mr-2" /> Tu Carrito
            </button>
        </nav>
    );
}