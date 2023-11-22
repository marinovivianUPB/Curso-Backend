import { Request, Response, NextFunction } from 'express';
import {body, validationResult} from 'express-validator';

export const userValidationRules = () =>{
    return [
        body('username').isAlphanumeric(),
        body('password').isLength({min: 8}),
        body('email').isEmail(),
        body('roleId').isString().isLength({min: 2})
    ]
}

export const validate = (req: Request, res:Response, next: NextFunction) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    return next();
}