import express from "express";
import v1EjercicioRouter from "./v1/routes/ejercicio.routes.js";
import cors from "cors";

// Creamos el servidor
const app = express();

//Middlewares
import mongoose from "./database/database.js";
import "dotenv/config";
// Habilitar CORS para todas las rutas
app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/ejercicios", v1EjercicioRouter);

app.listen(port);
console.log("Servidor iniciado en el puerto ", port);
