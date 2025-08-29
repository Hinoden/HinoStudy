import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {v4 as uuidv4} from uuid;
import bcrypt from 'bcrypt';

const app = express();
const mongoDBPassword = process.env.PASSWORD;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://hinoden:<db_password>@study.yd5rdgl.mongodb.net/?retryWrites=true&w=majority&appName=study");

app.post("/signup", async (req, res) => {
    try {
        const {firstName, lastName, username, password} = req.body;
        const userId = uuidv4()     //generates a unique id for each user
        const hashedPassword = await bcrypt.hash(password, 10); //hashes password with a salt round of 10
        const token = serverClient.createToken(userId); //creates a token for the user
        res.json({token, userId, firstName, lastName, username, hashedPassword});
    } catch (error) {
        res.json(error);
    }
});

app.post("/login", (req, res) => {

});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});