import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { auth, JWT_SECRET } from './auth.js';

import { userModel, todoModel } from './db.js';
mongoose.connect("mongodb+srv://vivekofficial8434:Vivek%4012345@cluster0.jhmtwk9.mongodb.net/vivek-todo");



const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await userModel.create({
        name: name,
        email: email,
        password: password
    });

    res.json({
        message: "You are Signed Up"
    })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
        password: password
    });
    if(user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            message: "You are signed in",
            token: token
        })
    } else {
        res.status(403).json({
            message: "User not found"
        })
    }
});

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await todoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo Created"
    })
});

app.post("/todos", auth, async (req, res) => {
    const userId = req.userId;
    const todos = await todoModel.findOne({
        userId
    })
    res.json({
        todos
    })
});

app.listen(3000);