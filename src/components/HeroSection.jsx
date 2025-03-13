import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { ListFilter, Search } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";

export default function HeroSection({ searchTerm, onSearchChange, onFilterChange }) {
    const [filters, setFilters] = useState({
        stock: false,
        categorias: [],
    });

    // 🔹 Manejar cambio en la búsqueda
    const handleSearch = (e) => {
        onSearchChange(e.target.value);
    };

    // 🔹 Manejar cambio en los filtros
    const toggleFilter = (filter) => {
        const updatedFilters = { ...filters };

        if (filter === "stock") {
            updatedFilters.stock = !updatedFilters.stock;
        } else {
            if (updatedFilters.categorias.includes(filter)) {
                updatedFilters.categorias = updatedFilters.categorias.filter((c) => c !== filter);
            } else {
                updatedFilters.categorias.push(filter);
            }
        }

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-end gap-8">
            {/* Sección del Texto */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !leading-[1.4]">
                    <span className="text-purple-500">Reservá</span> en segundos y te contactamos por <span className="text-purple-500">WhatsApp 🚀</span>
                </h1>
                <p className="text-xl text-slate-500">
                    ¿Buscás algo específico? Usa los filtros y encontralo al instante.
                </p>
            </div>

            {/* Sección del Buscador */}
            <div className="flex gap-4 w-full">
                <Input
                    iconLeft={<Search size={18} />}
                    placeholder="¿Qué necesitás?"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                {/* Dropdown con filtros */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" className="relative flex items-center gap-2">
                            <ListFilter size={20} />
                            Filtros
                            {(filters.stock || filters.categorias.length > 0) && (
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {filters.categorias.length + (filters.stock ? 1 : 0)}
                                </span>
                            )}
                        </Button>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-2 bg-white" avoidCollisions={false} sideOffset={5}>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.categorias.includes("alimento")} onCheckedChange={() => toggleFilter("alimento")} />
                            <span>Alimento</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.categorias.includes("accesorio")} onCheckedChange={() => toggleFilter("accesorio")} />
                            <span>Accesorios</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.categorias.includes("sanitario")} onCheckedChange={() => toggleFilter("sanitario")} />
                            <span>Sanitario</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.stock} onCheckedChange={() => toggleFilter("stock")} />
                            <span>Solo productos con stock</span>
                        </label>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
