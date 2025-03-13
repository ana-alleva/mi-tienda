import CardsWrapper from "@/components/CardsWrapper";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Whatsapp from "../assets/whatsapp.svg";
import Marcas from "@/components/Marcas";

export default function Home() {
  const openCart = () => {
    console.log("Abrir carrito (esto después será un modal)");
  };

  return (
    <div className="min-h-screen mx-auto bg-gray-50">
        <a href="https://api.whatsapp.com/send?phone=5491135889679"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
        >
          <img src={Whatsapp} alt="wp" />
        </a>
      <Navbar openCart={openCart} />
      <div className="md:px-8">
        <CardsWrapper />
      </div>
      <div className="p-24">
        <Marcas />
      </div>
      <div className="p-8 bg-[#0C111D]">
        <Footer />
      </div>
    </div>
  );
}
