export default function ProductList() {
  const { productos, loading } = useProducts();

  if (loading) return <p className="text-center">Cargando productos...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {productos.length > 0 ? (
        productos.map((producto) => {
          const whatsappMessage = `Hola, quiero reservar el producto *${producto.nombre}* por *$${producto.precio}*.`;

          return (
            <div key={producto.id} className="bg-white p-4 rounded-lg shadow">
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500">Sin imagen</span>
                </div>
              )}
              <h2 className="text-xl font-bold">{producto.nombre}</h2>
              <p className="text-gray-600">{producto.descripcion}</p>
              <p className="text-gray-800 font-semibold">${producto.precio}</p>
              <p className="text-sm text-gray-500">Stock: {producto.stock}</p>

              {/* 🔹 BOTÓN DE WHATSAPP */}
              <a
                href={`https://api.whatsapp.com/send?phone=5491123456789&text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block bg-purple-500 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-600 transition"
              >
                Reservar por WhatsApp 📲
              </a>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">No hay productos disponibles.</p>
      )}
    </div>
  );
}
