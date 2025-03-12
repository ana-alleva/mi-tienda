import Navbar from "@/components/Navbar";

export default function Home() {
  const openCart = () => {
    console.log("Abrir carrito (esto después será un modal)");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar openCart={openCart} />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-purple-600">Bienvenido a la Tienda 🚀</h1>
      </div>
    </div>
  );
}
