import { userModel } from "../models/model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const userNameDuplicated = await userModel.findOne({ username });
        if (userNameDuplicated) {
            return res.status(400).json({ error: ["This username already exists"] });
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: [error.message] });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await userModel.findOne({ email });

        if (!userFound)
            return res.status(400).json({ error: ["User not found"] });
        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch)
            return res.status(400).json({ error: ["Incorrect password"] });

        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: [error.message] });
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await userModel.findById(req.user.id);
    if (!userFound) return res.status(400).json({ error: ["User not found"] });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
};
