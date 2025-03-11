import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "/src/assets/logo.png"; // ✅ IMPORTAMOS EL LOGO

export default function Navbar({ openCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
        <img src={logo} alt="Arlequín Mascotas" className="h-8 w-8 mr-2" /> 
        Arlequín Mascotas
      </Link>

      {/* Botón hamburguesa en mobile */}
      <button
        className="lg:hidden text-gray-600 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú de navegación */}
      <div
        className={`absolute lg:relative top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"} lg:flex`}
      >
        <Link to="/perros" className="text-gray-600 hover:text-purple-600">Perros</Link>
        <Link to="/gatos" className="text-gray-600 hover:text-purple-600">Gatos</Link>
        <Link to="/accesorios" className="text-gray-600 hover:text-purple-600">Accesorios</Link>
        <Link to="/comida" className="text-gray-600 hover:text-purple-600">Comida</Link>
      </div>

      {/* Botón del carrito */}
      <button
        onClick={openCart}
        className="hidden lg:block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition flex items-center"
      >
        <ShoppingCart size={20} className="mr-2" /> Tu Carrito
      </button>
    </nav>
  );
}
