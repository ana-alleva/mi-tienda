import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { ListFilter, Search } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";

export default function HeroSection() {
    const [filters, setFilters] = useState({
        perros: false,
        gatos: false,
        seco: false,
    });

    const toggleFilter = (filter) => {
        setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };

    return (
        <div className="container mx-auto px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-end gap-8">
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
                    placeholder="Buscá lo que necesites..."
                />
                
                {/* Dropdown con filtros */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" iconLeft={<ListFilter size={20} />}>Filtros</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-2" avoidCollisions={false} sideOffset={5}>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.perros} onCheckedChange={() => toggleFilter("perros")} />
                            <span>Comida para perros</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.gatos} onCheckedChange={() => toggleFilter("gatos")} />
                            <span>Comida para gatos</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <Checkbox checked={filters.seco} onCheckedChange={() => toggleFilter("seco")} />
                            <span>Alimento seco</span>
                        </label>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}