import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const TodoSchema = new mongoose.Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

export const userModel = mongoose.model("users", userSchema);
export const todoModel = mongoose.model("todos", TodoSchema);