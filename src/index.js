import express from "express";
import v1EjercicioRouter from "./v1/routes/ejercicio.routes.js";
import v1AuthRoutes from "./v1/routes/auth.routes.js";
import cors from "cors";

// Creamos el servidor
const app = express();

//Middlewares
import mongoose from "./database/database.js"; //don't delete this import
import "dotenv/config";
// Habilitar CORS para todas las rutas
app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/ejercicios", v1EjercicioRouter);
app.use("/api/v1/auth", v1AuthRoutes);

app.listen(port);
console.log("Servidor iniciado en el puerto ", port);
