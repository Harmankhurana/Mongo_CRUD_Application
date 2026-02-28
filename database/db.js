import mongoose from "mongoose";
import { string } from "zod";

const { schema } = mongoose;

const userSchema = new schema({
    firstName: {
        required: true,
        type: string,
    },
    lastName: {
        required: true,
        type: string,
    },
    email: {
        required: true,
        type: string,
    },
    password: {
        required: true,
        type: string,
    },
});

const userModel = mongoose.model('user', userSchema);

export {
    userModel,
}