import { exerciseModel } from "../models/model.js";

export const getExercises = async (req, res) => {
    try {
        const exercises = await exerciseModel.find({});
        res.json(exercises);
    } catch (error) {
        console.log(error);
    }
};
