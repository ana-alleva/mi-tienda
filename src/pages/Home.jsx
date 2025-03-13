import CardsWrapper from "@/components/CardsWrapper";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const openCart = () => {
    console.log("Abrir carrito (esto después será un modal)");
  };

  return (
    <div className="min-h-screen mx-auto bg-gray-50">
      <Navbar openCart={openCart} />
      <div className="md:px-8">
        <CardsWrapper />
      </div>
    </div>
  );
}
