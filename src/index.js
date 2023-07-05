import express from 'express';
import { ejercicioRouter } from './routes/ejercicio.routes.js';
import cors from 'cors';

// Creamos el servidor
const app = express()

//Middlewares
import mongoose from './database.js';
import 'dotenv/config';
app.use(cors())
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/ejercicios",ejercicioRouter);

app.listen(port, () => console.log('Servidor iniciado'));

