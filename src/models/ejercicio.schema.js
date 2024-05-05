import mongoose from "mongoose";

export const ejercicioSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscle: {
            type: String,
            required: true,
        },
        series: {
            type: Number,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
        },
        date: {
            type: Date,
            required: true,
        },
        videoURL: {
            type: String,
        },
        image: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
