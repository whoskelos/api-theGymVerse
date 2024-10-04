import express from "express";

import { getExercises } from "../../controllers/exercise.controller.js";
import { authRequired } from "../../middlewares/validateToken.js";

const exerciseRouter = express.Router(); // exportamos el router

/*
 * * ENDPOINT get: para listar los ejercicios
 */

exerciseRouter.get("/", authRequired, getExercises);

export default exerciseRouter;
