import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';

import {userRouter} from "./routes/users.js";

dotenv.config();        //loads environment variables from .env file
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@study.yd5rdgl.mongodb.net/study?retryWrites=true&w=majority&appName=study`);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});