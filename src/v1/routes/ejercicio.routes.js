import express from "express";
import {
    crearNuevoEjercicio,
    editarEjercicio,
    eliminarEjercicio,
    getEjercicioById,
    getEjercicios,
} from "../../controllers/ejercicio.controller.js";
const ejercicioRouter = express.Router(); // exportamos el router

/*
 * * ENDPOINT get: para listar todos los ejercicios
 */

ejercicioRouter.get("/", getEjercicios);

/*
 * * ENDPOINT post: para crear un nuevo ejercicio
 */
ejercicioRouter.post("/", crearNuevoEjercicio);

/*
 * * ENDPOINT patch: para editar un ejercicio
 */

ejercicioRouter.patch("/:id", editarEjercicio);

/**
 *  * ENDPOINT get: para listar un ejercicio por id
 */
ejercicioRouter.get("/:id", getEjercicioById);

/**
 *  * ENDPOINT delete: para eliminar un ejercicio por id
 */
ejercicioRouter.delete("/:id", eliminarEjercicio);

export default ejercicioRouter;
