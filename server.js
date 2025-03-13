import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

app.get("/api/products", async (req, res) => {
    try {
        const response = await notion.databases.query({ database_id: databaseId });

        console.log("🔎 Respuesta completa de Notion:", JSON.stringify(response, null, 2));

        const products = response.results.map(page => ({
            id: page.id,
            nombre: page.properties["Producto"]?.title?.[0]?.text?.content || "Sin nombre",
            descripcion: page.properties["Descripción"]?.rich_text?.[0]?.text?.content || "Sin descripción",
            categoria: page.properties["Categoría"]?.select?.name || "Sin categoría",
            precio: page.properties["Precio"]?.number || 0,
            stock: page.properties["Stock"]?.number || 0,
            peso_volumen: page.properties["Peso/Volumen"]?.rich_text?.[0]?.text?.content || "",
            imagen: page.properties["Imagen"]?.files?.[0]?.file?.url || "",
        }));

        console.log("✅ Productos procesados:", products);

        res.json(products);
    } catch (error) {
        console.error("❌ Error al obtener productos:", error.response ? error.response.data : error);
        res.status(500).json({ error: "Error al obtener productos" });
    }    
});

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
