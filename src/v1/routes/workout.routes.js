import express from "express";
import {
    crearNuevoEjercicio,
    editarEjercicio,
    eliminarEjercicio,
    getEjercicioById,
    getWorkoutExercises,
} from "../../controllers/workout.controller.js";
import { authRequired } from "../../middlewares/validateToken.js";
// import { validateSchema } from "../../middlewares/validator.middleware.js";
// import { createExerciseSchema } from "../../schemas/exercise.schema.js";
const workoutRouter = express.Router(); // exportamos el router

/*
 * * ENDPOINT get: para listar todos los ejercicios
 */

workoutRouter.get("/", authRequired, getWorkoutExercises);

/*
 * * ENDPOINT post: para crear un nuevo ejercicio
 */
workoutRouter.post("/", authRequired, crearNuevoEjercicio);

/*
 * * ENDPOINT patch: para editar un ejercicio
 */

workoutRouter.patch("/:id", authRequired, editarEjercicio);

/**
 *  * ENDPOINT get: para listar un ejercicio por id
 */
workoutRouter.get("/:id", authRequired, getEjercicioById);

/**
 *  * ENDPOINT delete: para eliminar un ejercicio por id
 */
workoutRouter.delete("/:id", authRequired, eliminarEjercicio);

export default workoutRouter;
