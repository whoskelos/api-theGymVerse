import { z } from "zod";

export const createExerciseSchema = z.object({
    name: z
        .string({
            required_error: "Name is required",
        })
        .min(3, { message: "Name Must be 3 or more characters long" })
        .max(80, { message: "Name Must be 80 or fewer characters long" }),
    muscle: z
        .string({
            required_error: "Muscle is required",
        })
        .min(3, { message: "Muscle Must be 3 or more characters long" })
        .max(80, { message: "Muscle NMust be 5 or fewer characters long" }),
    sets: z
        .array(
            z.object({
                serie: z
                    .number({
                        required_error: "Series are required",
                    })
                    .positive()
                    .int()
                    .max(10, {
                        message: "Series must be less than or equal to 30"
                    }),
                reps: z
                    .number({
                        required_error: "Reps are required",
                    })
                    .positive()
                    .int()
                    .max(30, {
                        message: "Reps must be less than or equal to 30",
                    }),
                weight: z
                    .number({
                        required_error: "Weight is required",
                    })
                    .positive()
                    .int().max(200, {
                        message: "Weight must be less than or equal to 200",
                    }),
            })
        )
        .min(1, { message: "You must save at least 1 set" }), // Ensure at least one set
    date: z.string().date().optional(),
});
