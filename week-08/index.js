import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from "./routes/userRouter.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRouter);

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection successfully");
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})
