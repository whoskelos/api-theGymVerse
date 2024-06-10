import express from "express";
import v1EjercicioRouter from "./v1/routes/ejercicio.routes.js";
import v1AuthRoutes from "./v1/routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// Creamos el servidor
const app = express();

//Middlewares
import mongoose from "./database/database.js"; //don't delete this import
import "dotenv/config";
// Habilitar CORS para todas las rutas
const whitelist = [
    "https://the-gym-verse-v-2.vercel.app",
    "http://localhost:5173",
    "https://gym.kelvinguerrero.dev",
];
app.use(
    cors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/ejercicios", v1EjercicioRouter);
app.use("/api/v1/auth", v1AuthRoutes);

app.listen(port);
console.log("Servidor iniciado en el puerto ", port);
