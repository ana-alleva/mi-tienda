import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import logo from "/src/assets/logo.png";
import { Button } from "./ui/button";

export default function Navbar({ openCart }) {
    return (
        <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
            <Link to="/">
                <img src={logo} alt="Arlequín Mascotas" />
            </Link>
            <Button
                variant="outline"
                size="lg"
                onClick={openCart}
                className="flex items-center gap-2"
            >
                <ShoppingCart size={20} />
                Tu Carrito
            </Button>

        </nav>
    );
}