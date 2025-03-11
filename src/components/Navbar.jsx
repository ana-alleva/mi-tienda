import { Link } from "react-router-dom";

export default function Navbar({ openCart }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Arlequín Mascotas
      </Link>

      {/* Categorías */}
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-purple-600">Perros</Link>
        <Link to="/" className="text-gray-600 hover:text-purple-600">Gatos</Link>
        <Link to="/" className="text-gray-600 hover:text-purple-600">Accesorios</Link>
        <Link to="/" className="text-gray-600 hover:text-purple-600">Comida</Link>
      </div>

      {/* Botón del carrito */}
      <button
        onClick={openCart}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
      >
        🛒 Tu Carrito
      </button>
    </nav>
  );
}
