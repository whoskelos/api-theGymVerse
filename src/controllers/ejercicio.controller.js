import { ejercicioModel } from "../models/model.js";

export const getEjercicios = async (req, res) => {
    const ejercicios = await ejercicioModel
        .find({
            user: req.user.id,
        })
        .populate("user");
    res.json(ejercicios);
};

export const getEjercicioById = async (req, res) => {
    const exercise = await ejercicioModel
        .findById(req.params.id)
        .populate("user");
    if (!exercise)
        return res.status(404).json({ message: "Exercise not found" });
    res.json(exercise);
};

export const crearNuevoEjercicio = async (req, res) => {
    const { name, muscle, series, reps, weight, date } = req.body;
    const newExercise = new ejercicioModel({
        name,
        muscle,
        series,
        reps,
        weight,
        date,
        user: req.user.id,
    });
    const savedExercise = await newExercise.save();
    res.json(savedExercise);
};

export const editarEjercicio = async (req, res) => {
    const ejercicioActualizado = await ejercicioModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
            new: true,
        }
    );
    res.json(ejercicioActualizado);
};

export const eliminarEjercicio = async (req, res) => {
    const exercise = await ejercicioModel.findByIdAndDelete(req.params.id);
    if (!exercise)
        return res.status(404).json({ message: "Exercise not found" });
    res.sendStatus(204);
};
