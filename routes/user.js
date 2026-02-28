import Router from 'express';
const userRouter = Router();
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { userModel } from '../database/db';

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
    };



    const { firstName, lastName, email, password } = req.body;


    const hashedPassword = bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)

    await userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });

    res.json({
        message: "You're signed up",
    })

});

userRouter.post('/signin', function(req, res){

});

export {
    userRouter,
}