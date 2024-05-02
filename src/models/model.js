import mongoose from "mongoose";
import { ejercicioSchema } from "./ejercicio.schema.js";
import { userSchema } from "./user.model.js";

export const ejercicioModel = mongoose.model("ejercicio", ejercicioSchema);
export const userModel = mongoose.model("user", userSchema);