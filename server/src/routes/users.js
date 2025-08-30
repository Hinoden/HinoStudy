import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {UserModel} from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if (user) {
        return res.json({message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, hashedPassword});
    await newUser.save();

    res.json({message: "User registered successfully!"});
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({message: "User does not exist!"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);      //algorithm for hashing password is always the same!

    if (!isPasswordValid) {
        return res.json({message: "Username or password is incorrect!"});
    }

    const token = jwt.sign({id: user._id}, process.env.MONGO_SECRET);   //token is a string that makes no sense but converts to the user._id
    res.json({token, userID: user._id});
})

export {router as userRouter};