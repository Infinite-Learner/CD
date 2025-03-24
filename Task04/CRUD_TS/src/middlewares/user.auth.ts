import { NextFunction, Request, Response } from "express";
import { TokenExpiredError, verify } from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("auth");
        const token = req.headers.authorization?.replace("Bearer ", "");
        
        if (token === "" || !token) {
            res.send({ message: "Token not found" });
            return;
        }
        const isvalid = verify(token as string, process.env.JWT_TOKEN as string, (error) => {
            if (error) {
                res.status(401).send({ message: "TokenExpired" });
                return;
            }

        }
        );
        if (typeof isvalid === "string") {
            res.sendStatus(403);
            return;
        }
        next();

    } catch (error) {
        console.log(error);
    }
}