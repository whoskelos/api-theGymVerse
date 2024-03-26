import { ejercicioModel } from "../models/model.js"; // Importamos el model importante el .js para que sepa que es una importacion local

export const getEjercicios = async (req, res) => {
    const ejercicios = await ejercicioModel.find({});
    return ejercicios;
};

export const getEjercicioById = async (req, res) => {
    const ejercicio = await ejercicioModel.findById({ _id: req.params.id });
    if (ejercicio) {
        return ejercicio;
    } else {
        return "El ejercicio no existe";
    }
};

export const crearNuevoEjercicio = async (req, res) => {
    const ejercicioCreado = await ejercicioModel.create(req.body);
    return ejercicioCreado;
};

export const editarEjercicio = async (req, res) => {
    const ejercicioActualizado = await ejercicioModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
            new: true,
        }
    );
    return ejercicioActualizado;
};

export const eliminarEjercicio = async (req, res) => {
    const result = await ejercicioModel.deleteOne({ _id: req.params.id });
    return result;
};
