import { error } from "console";
import { configDotenv } from "dotenv";
import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, JwtPayload, verify } from "jsonwebtoken";
configDotenv()
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("auth");
        const token = req.headers.authorization?.replace("Bearer ", "");
        
        if (token === "" || !token) {
            res.send({ message: "Token not found" ,redirect:"login"}).redirect("/");
            return;
        }
        const isvalid = verify(token as string, process.env.JWT_TOKEN as string) as JwtPayload;
        // if (!isvalid) {
        //     throw JsonWebTokenError;    
        // }
        next();

    } catch (error) {
        next(error);
        
    }
}