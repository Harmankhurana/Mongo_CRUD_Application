import Router from 'express';
import jwt from 'jsonwebtoken';
const userRouter = Router();
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { userModel } from '../database/db.js';
import { JWT_SECRET } from '../config.js';

const saltRounds = 10;

userRouter.post('/signup', async function(req, res){
    const requiredBody = z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format used",
            error: parsedDataWithSuccess,
        })
        return;
    };

    const { firstName, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword)

        await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        });
        res.json({
            message: "You're signed up",
        });

    } catch (e) {
        console.log(e);
        res.json({
            message: "Something went wrong while signing up"
        })
    };
});

userRouter.post('/signin', async function(req, res){
    const { email, password } = req.body;

    const response = await userModel.findOne({
        email: email,
    });

    if(!response){
        res.json({
            message: "User does not exist in our DB!"
        })
    };

    const passwordMatch = bcrypt.compare(password, response.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString(),
        }, JWT_SECRET);
        res.json({
            token: token,
        });
        console.log(token);
    } else {
        res.json({
            message: "Incorrect credentials"
        })
    }
    
});

export {
    userRouter,
}