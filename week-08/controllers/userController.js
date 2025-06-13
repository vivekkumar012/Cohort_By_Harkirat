import { userModel } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password} = req.body;
        if(!firstname || !lastname || !email || !password) {
            return res.status(403).json({
                Message: "All fields are required"
            })
        }
        // ZOD Validation baad me jor dena
        const user = await userModel.findOne({
            email : email
        })
        if(user) {
            return res.status(403).json({
                message: "User already exist with this email"
            })
        }

        const hashPass = await bcrypt.hash(password, 10);

        await userModel.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPass
        })
        res.status(200).json({
            msg: "User SignUp Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in user Signup controller",
            error: error.message
        })
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(402).json({
                msg: "All Fields are required"
            })
        }

        const user = await userModel.findOne({
            email: email
        })
        if(!user) {
            return res.status(402).json({
                msg: "User not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(403).json({
                msg: "Password not matched"
            })
        }

        const token = await jwt.sign({
            id: user._id
        }, process.env.JWT_USER_SECRET);

        res.status(200).json({
            msg: "User signin successfully",
            token
        })
    } catch (error) {
        res.status(403).json({
            msg: "Error in User Signin controller",
            error: error.message
        })
    }
};