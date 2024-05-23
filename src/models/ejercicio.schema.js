import mongoose from "mongoose";
import { string } from "zod";

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
        sets: {
            type: [
                {
                    serie: {
                        type: Number,
                        required: true,
                    },
                    reps: {
                        type: Number,
                        required: true,
                    },
                    weight: {
                        type: Number,
                        required: true,
                    },
                },
            ],
            required: true,
            default: [],
        },
        date: {
            type: String,
        },
        comment: {
            type: String,
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
