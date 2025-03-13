import { Client } from "@notionhq/client";

// Crear el cliente de Notion con la API Key
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_SECRET, // ⚠️ Usa import.meta.env en Vite
});

// Función para obtener productos
export async function getProducts() {
  const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID; // ⚠️ Usa import.meta.env en Vite

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    return response.results.map((page) => ({
      id: page.id,
      nombre: page.properties.Nombre?.title[0]?.text.content || "Sin nombre",
      descripcion: page.properties.Descripción?.rich_text[0]?.text.content || "Sin descripción",
      categoria: page.properties.Categoría?.select?.name || "Sin categoría",
      precio: page.properties.Precio?.number || 0,
      stock: page.properties.Stock?.number || 0,
      peso_volumen: page.properties["Peso/Volumen"]?.rich_text[0]?.text.content || "",
      imagen: page.properties.Imagen?.files[0]?.file.url || "",
    }));
  } catch (error) {
    console.error("Error al obtener los productos de Notion:", error);
    return [];
  }
}
