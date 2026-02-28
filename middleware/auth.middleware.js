import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

function authMiddleware(req, res, next){
    const token = req.headers.token;

    const response = jwt.verify(
        token, 
        JWT_SECRET
    );

    if(response){
        req.userId = response.id;
        next();
    } else {
        res.json({
            message: "You're not signed in"
        })
    }
};

export {
    authMiddleware
}