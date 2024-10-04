import { workoutModel } from "../models/model.js";

export const getWorkoutExercises = async (req, res) => {
    const ejercicios = await workoutModel
        .find({
            user: req.user.id,
        })
        .populate("user");
    res.json(ejercicios);
};

export const getEjercicioById = async (req, res) => {
    const exercise = await workoutModel
        .findById(req.params.id)
        .populate("user");
    if (!exercise)
        return res.status(404).json({ message: "Exercise not found" });
    res.json(exercise);
};

export const crearNuevoEjercicio = async (req, res) => {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    const { name, sets, date, comment } = req.body;
    try {
        const newExercise = new workoutModel({
            name,
            sets,
            date: date || fechaFormateada,
            comment,
            user: req.user.id,
        });
        await newExercise.save();
        res.status(200).json({
            status: "success",
            message: "Exercise created successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: `Something bad happenned :(`,
        });
    }
};

export const editarEjercicio = async (req, res) => {
    const ejercicioActualizado = await workoutModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
            new: true,
        }
    );
    res.json(ejercicioActualizado);
};

export const eliminarEjercicio = async (req, res) => {
    const exercise = await workoutModel.findByIdAndDelete(req.params.id);
    if (!exercise)
        return res.status(404).json({ message: "Exercise not found" });
    res.sendStatus(204);
};
