import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://arlequin-backend.onrender.com/api/products");
        if (!response.ok) throw new Error("Error al obtener productos");

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("❌ Error al obtener productos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
