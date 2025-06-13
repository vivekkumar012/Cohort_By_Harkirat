import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { adminModel } from '../models/adminModel.js';

export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password} = req.body;
                if(!firstname || !lastname || !email || !password) {
                    return res.status(403).json({
                        Message: "All fields are required"
                    })
                }
                // ZOD Validation baad me jor dena
                const admin = await adminModel.findOne({
                    email : email
                })
                if(admin) {
                    return res.status(403).json({
                        message: "admin already exist with this email"
                    })
                }
        
                const hashPass = await bcrypt.hash(password, 10);
        
                await adminModel.create({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hashPass
                })
                res.status(200).json({
                    msg: "Admin SignUp Successfully"
                })
    } catch (error) {
        res.status(403).json({
            msg: "Error in admin signup",
            error: error.message
        })
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(402).json({
                msg: "All Fields are required"
            })
        }

        const admin = await adminModel.findOne({
            email: email
        })
        if(!admin) {
            return res.status(402).json({
                msg: "admin not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) {
            return res.status(403).json({
                msg: "Password not matched"
            })
        }

        const token = await jwt.sign({
            id: admin._id
        }, process.env.JWT_ADMIN_SECRET);

        res.status(200).json({
            msg: "Admin signin successfully",
            token
        })
    } catch (error) {
        res.status(403).json({
            msg: "Error in User Signin controller",
            error: error.message
        })
    }
};