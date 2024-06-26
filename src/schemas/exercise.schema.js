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
    set: z
        .number({
            required_error: "Set is required",
        })
        .positive({ message: "Number not valid" }),
    date: z.string().date().optional(),
});
