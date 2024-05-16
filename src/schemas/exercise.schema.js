import { z } from "zod";

export const createExerciseSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    muscle: z.string({
        required_error: "Muscle is required",
    }),
    series: z.number({
        required_error: "Series are required",
    }),
    reps: z.number({
        required_error: "Reps are required",
    }),
    weight: z.number({
        required_error: "Weight is required",
    }),
    date: z.string().date().optional(),
});
