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
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const { name, muscle, set, reps, weight, date } = req.body;
    //construimos el set
    const sets = [
        {
            serie: set,
            reps,
            weight
        }
    ]
    const newExercise = new ejercicioModel({
        name,
        muscle,
        sets,
        date: date || fechaFormateada,
        user: req.user.id,
    });
    await newExercise.save();
    res.status(200).json({status: "success", message: "Exercise created successfully"});
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
