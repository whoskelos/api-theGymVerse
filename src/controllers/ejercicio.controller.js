import * as ejercicioService from "../services/ejercicio.service.js";

export const getEjercicios = async (req, res) => {
    const ejercicios = await ejercicioService.getEjercicios();
    res.send({status: "success", data: ejercicios});
};

export const getEjercicioById = (req, res) => {
    const ejercicio = ejercicioService.getEjercicioById();
    if (ejercicio) {
        res.status(200).send(ejercicio);
    } else {
        res.status(400).send("El ejercicio no existe :(");
    }
};

export const crearNuevoEjercicio = (req, res) => {
    const ejercicioCreado = ejercicioService.crearNuevoEjercicio();
    res.status(201).send(ejercicioCreado);
};

export const editarEjercicio = (req, res) => {
    const ejercicioActuliazado = ejercicioService.editarEjercicio();
    res.status(200).send(ejercicioActuliazado);
};

export const eliminarEjercicio = (req, res) => {
    const result = ejercicioService.eliminarEjercicio();
    res.send(result);
};
