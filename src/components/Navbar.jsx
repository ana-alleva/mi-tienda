import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import logo from "/src/assets/logo-white.svg";
import { Button } from "./ui/button";

export default function Navbar({ openCart }) {
    return (
        <nav className="py-4 px-6 flex justify-between items-center w-full bg-white shadow-sm">
            <Link to="/">
                <img src={logo} alt="Arlequín Mascotas" />
            </Link>
            <Button
                variant="default"
                size="lg"
                onClick={openCart}
                className="flex items-center gap-2"
                iconLeft={<ShoppingCart size={20} />}
            >
                Tu Carrito
            </Button>
        </nav>
    );
}