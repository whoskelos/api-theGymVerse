import express from "express";
import {
    crearNuevoEjercicio,
    editarEjercicio,
    eliminarEjercicio,
    getEjercicioById,
    getEjercicios,
} from "../../controllers/ejercicio.controller.js";
import { authRequired } from "../../middlewares/validateToken.js";
const ejercicioRouter = express.Router(); // exportamos el router

/*
 * * ENDPOINT get: para listar todos los ejercicios
 */

ejercicioRouter.get("/", authRequired, getEjercicios);

/*
 * * ENDPOINT post: para crear un nuevo ejercicio
 */
ejercicioRouter.post("/", authRequired, crearNuevoEjercicio);

/*
 * * ENDPOINT patch: para editar un ejercicio
 */

ejercicioRouter.patch("/:id", authRequired, editarEjercicio);

/**
 *  * ENDPOINT get: para listar un ejercicio por id
 */
ejercicioRouter.get("/:id", authRequired, getEjercicioById);

/**
 *  * ENDPOINT delete: para eliminar un ejercicio por id
 */
ejercicioRouter.delete("/:id", authRequired, eliminarEjercicio);

export default ejercicioRouter;
