export default function Cards({ products }) {
    if (!products.length)
      return <p className="text-center text-gray-500">No hay productos disponibles en esta categoría.</p>;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={product.imagen || "/placeholder.png"} alt={product.nombre} className="w-full h-40 object-cover" />
            <div className="p-4 bg-gray-100">
              <span className="text-sm text-gray-500">{product.categoria}</span>
              <h3 className="text-lg font-bold">{product.nombre}</h3>
              <p className="text-sm text-gray-600">{product.peso_volumen}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-gray-900">${product.precio}</span>
                <button className="bg-purple-600 text-white px-3 py-1 rounded-md">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  