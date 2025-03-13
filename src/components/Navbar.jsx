import { Link } from "react-router-dom";
import logo from "/src/assets/logo-white.svg";
import Facebook from "../assets/facebook-black.svg";
import Instagram from "../assets/instagram-black.svg";

export default function Navbar() {
    return (
        <nav className="py-4 px-6 flex justify-between items-center w-full bg-white shadow-sm">
            <Link to="/">
                <img src={logo} alt="Arlequín Mascotas" />
            </Link>
            <div className="flex gap-4">
                <img src={Facebook} alt="facebook" />
                <img src={Instagram} alt="instagram" />
            </div>
        </nav>
    );
}