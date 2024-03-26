import mongoose from "mongoose";
import { ejercicioSchema } from "./ejercicio.schema.js";

export const ejercicioModel = mongoose.model("ejercicio", ejercicioSchema);