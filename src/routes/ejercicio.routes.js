import express  from "express";
import { ejercicioModel } from "../models/model.js"// Importamos el model importante el .js para que sepa que es una importacion local
export const ejercicioRouter = express.Router() // exportamos el router

/*
* * ENDPOINT get: para listar todos los ejercicios  
*/

ejercicioRouter.get("/", async (req,res) => {
    const ejercicios = await ejercicioModel.find({})
    res.status(200).send(ejercicios);
})

/*
* * ENDPOINT post: para crear un nuevo ejercicio  
*/
ejercicioRouter.post("/", async (req,res) => {
    const ejercicioCreado = await ejercicioModel.create(req.body)
    res.status(201).send(ejercicioCreado)
})

/*
* * ENDPOINT patch: para editar un ejercicio
*/

ejercicioRouter.patch("/:id", async (req,res) => {
    const ejercicioActuliazado = await ejercicioModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    })
    res.status(200).send(ejercicioActuliazado);
})