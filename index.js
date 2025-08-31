//This is the main entrance of the backend (express lift)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import corsConfig from "./cors-config.js";
import videosRoutes from "./modules/videos/videos.routes.js";
import categoriesRoutes from "./modules/categories/categories.routes.js";
import speakersRoutes from "./modules/speakers/speakers.routes.js";
import cloudinary from "./cloudinary.js";
import searchVideos from "./modules/search/search.routes.js";
import Comments from "./modules/comments/comment.routes.js"
import chatRoute from "./modules/chat/chat.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
dotenv.config();
cloudinary.config();

// Initialize Express
const app = express();

// Configuración de CORS - DEBE IR ANTES DE TODO
app.use(cors(corsConfig));

// Middleware adicional para manejar preflight requests
app.options('*', cors(corsConfig));

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
    next();
});

app.use(express.json()); // To handle JSON in requests



// Ruta de prueba para verificar que el servidor funciona
app.get("/hello", (req, res) => {
    res.json({
        message: "Server is running!",
        name: "David",
        timestamp: new Date().toISOString(),
        cors: "enabled"
    });
});

// Ruta de prueba para CORS
app.get("/test-cors", (req, res) => {
    res.json({
        message: "CORS test successful",
        origin: req.headers.origin,
        method: req.method
    });
});

// Routes
app.use("/videos", videosRoutes);
app.use("/categories", categoriesRoutes);
app.use("/speakers", speakersRoutes);
app.use("/search", searchVideos);
app.use("/comment", Comments)
app.use("/chat", chatRoute);
app.use("/auth", authRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        path: req.originalUrl 
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on the port: http://localhost:3000");
    console.log("CORS enabled for multiple origins including cb-front-lol.vercel.app");
});
