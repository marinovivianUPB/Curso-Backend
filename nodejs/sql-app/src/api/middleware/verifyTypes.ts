import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwt as jwtConfig } from '../../infrastructure/config/config';

export const verifyCreate = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    if (body) {
        if(!body.username || !body.email || !body.password ||!body.roleId){
            res.status(401).json({ message: "Body no tiene todas las propiedades" });
        } else{
            if(!(body.username instanceof String) || !(body.email instanceof String) || !(body.password instanceof String) || !(body.roleId instanceof String)){
                res.status(401).json({ message: "Propiedad(es) no validas" });
            }
            next();
        }
    } else {
        res.status(401).json({ message: "Body no proporcionado" });
    }
};