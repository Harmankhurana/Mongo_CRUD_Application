import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRouter } from './routes/user';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api/v1/user', userRouter);
app.use('/api/v1/todo', todoRouter);

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB is connected with the server");
    app.listen(PORT, () => {
        console.log(`Server is running`);
    });
};
main();
