import mongoose from "mongoose";

export const exerciseSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        zonaMuscular: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
