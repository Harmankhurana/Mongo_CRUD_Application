import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,    
    email: {
        type: String,
        required: true,
    },
    password: String,
});

const userModel = mongoose.model('user', userSchema);

export {
    userModel,
}