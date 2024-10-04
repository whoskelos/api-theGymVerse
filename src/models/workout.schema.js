import mongoose from "mongoose";

export const workoutSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscle: {
            type: String,
        },
        sets: {
            type: [
                {
                    set: {
                        type: String,
                        required: true,
                    },
                    reps: {
                        type: String,
                        required: true,
                    },
                    weight: {
                        type: String,
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
