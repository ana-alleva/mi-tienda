import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import logo from "../assets/logo-black.svg";

export default function Footer() {

    return (
        <div className="flex text-white items-center justify-between">
            <Link to="/">
            <img src={logo} alt="Arlequín Mascotas" />
            </Link>
            <div className="flex gap-4">
                <img src={Facebook} alt="facebook" />
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    );
}
