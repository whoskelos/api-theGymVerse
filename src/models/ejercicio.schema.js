import mongoose from "mongoose";

export const ejercicioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        zonaMuscular: {
            type: String,
            required: true,
        },
        series: {
            type: Number,
            required: true,
        },
        repeticiones: {
            type: Number,
            required: true,
        },
        videoURL: {
            type: String,
            required: true,
        },
        imagen: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
