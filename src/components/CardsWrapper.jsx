import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import HeroSection from "./HeroSection"; // ✅ Importamos HeroSection
import { Search } from "lucide-react";

export default function CardsWrapper() {
    const { products, loading, error } = useProducts();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("alimento");

    // ✅ Definimos filtros
    const [filters, setFilters] = useState({
        stock: false, // Solo productos con stock
        categorias: [],
    });

    // 🔹 Función para filtrar productos
    const getFilteredProducts = (categoria) => {
        return products.filter((prod) => {
            const matchesSearch = prod.nombre.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = prod.categoria.toLowerCase() === categoria;

            const matchesFilter =
                (filters.categorias.length === 0 || filters.categorias.includes(prod.categoria.toLowerCase())) &&
                (!filters.stock || prod.stock > 0);

            return matchesSearch && matchesCategory && matchesFilter;
        });
    };

    // 🔹 Cambiar automáticamente a la primera pestaña con productos
    useEffect(() => {
        const categorias = ["alimento", "accesorio", "sanitario"];
        for (let categoria of categorias) {
            if (getFilteredProducts(categoria).length > 0) {
                setSelectedCategory(categoria);
                break;
            }
        }
    }, [searchTerm, filters, products]);

    if (error) return <p className="text-center text-red-500">❌ {error}</p>;


    return (
        <div className="container mx-auto px-6 md:px-8 py-4">
            {/* ✅ PASAMOS SEARCH Y FILTERS A HeroSection */}
            <HeroSection
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onFilterChange={setFilters}
            />

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="border border-gray-300 rounded-lg shadow overflow-hidden animate-pulse">
                            <div className="w-full h-[250px] bg-gray-300"></div>
                            <div className="p-4">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">

                    <TabsList className="flex gap-2">
                        <TabsTrigger value="alimento">Alimento</TabsTrigger>
                        <TabsTrigger value="accesorio">Accesorios</TabsTrigger>
                        <TabsTrigger value="sanitario">Sanitario</TabsTrigger>
                    </TabsList>

                    {["alimento", "accesorio", "sanitario"].map((categoria) => {
                        const filteredProducts = getFilteredProducts(categoria);

                        return (
                            <TabsContent key={categoria} value={categoria}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((prod) => {
                                            const whatsappMessage = `Hola, quiero reservar el producto *${prod.nombre}* por *$${prod.precio}*.`;

                                            return (
                                                <div key={prod.id} className="border border-gray-300 rounded-lg shadow overflow-hidden hover:border-purple-500 hover:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.1),_0px_0px_0px_4px_rgba(158,119,237,0.4)]
                                            focus:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.1),_0px_0px_0px_4px_rgba(158,119,237,0.5)]
                                            transition-shadow duration-300">
                                                    <img
                                                        src={prod.imagen || "https://via.placeholder.com/150"}
                                                        alt={prod.nombre}
                                                        className="w-full h-[250px] object-cover p-4"
                                                    />
                                                    <div className="bg-[#ECEAF2] p-4">
                                                        <div className="relative group">
                                                            <h3 className="text-2xl font-bold truncate w-full" title={prod.nombre}>
                                                                {prod.nombre}
                                                            </h3>
                                                            <span className="absolute left-0 top-full hidden w-max bg-gray-900 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200">
                                                                {prod.nombre}
                                                            </span>
                                                        </div>

                                                        <p className="text-sm text-slate-600">{prod.descripcion}</p>
                                                        <p className="text-2xl font-semibold">${prod.precio}</p>
                                                        <p className="text-xs">{prod.stock > 0 ? `Stock: ${prod.stock}` : "Sin stock"}</p>
                                                        <a
                                                            href={`https://api.whatsapp.com/send?phone=5491135889679&text=${encodeURIComponent(whatsappMessage)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-6 block bg-purple-700 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-800 transition"
                                                        >
                                                            Reservar tu Pedido
                                                        </a>

                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="col-span-full items-center justify-center text-center p-4">
                                            <div className="mx-auto w-fit p-2 border border-gray-300 rounded-sm mb-4">
                                                <Search />
                                            </div>
                                            <p className="text-center text-gray-500">No se encontraron productos con estos filtros.</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            )}
        </div>
    );
}
