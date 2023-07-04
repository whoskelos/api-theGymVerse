import express from 'express';
import { ejercicioRouter } from './routes/ejercicio.routes.js';
import cors from 'cors';

// Creamos el servidor
const app = express()

//Middlewares
import mongoose from './database.js';
import 'dotenv/config';
// Habilitar CORS para todas las rutas
app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/ejercicios",ejercicioRouter);

app.listen(port);
console.log('Servidor iniciado en el puerto ', port);

