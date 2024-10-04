import mongoose from "mongoose";
import { workoutSchema } from "./workout.schema.js";
import { userSchema } from "./user.model.js";
import { exerciseSchema } from "./excersise.schema.js";

export const workoutModel = mongoose.model("workoutexercises", workoutSchema);
export const userModel = mongoose.model("user", userSchema);
export const exerciseModel = mongoose.model("exercises", exerciseSchema);