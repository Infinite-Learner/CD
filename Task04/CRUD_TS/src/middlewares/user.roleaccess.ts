import { NextFunction, Request, Response } from "express";
import { roles } from "../roles/user.roles";
import { JwtPayload, verify } from "jsonwebtoken";
import { getUser } from "../services/user.services";
import { configDotenv } from "dotenv";

configDotenv();

export const roleAccess = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        console.log("FF");
        
        if (token === "") {
            res.send({ message: "Token not found" });
            return;
        }
        const payload = verify(
            token as string,
            process.env.JWT_TOKEN as string
        ) as JwtPayload;
        const user = await getUser(payload.email);
        const role = user?.role.toUpperCase();
        if (user == null || typeof user === "undefined") {
            res.send({ message: "invalid token" });
            return;
        }
        if (req.method === "POST" || req.method === "DELETE") {
            console.log("ME");
            
            if (role === "" || !((role as string) in roles) || role !== "ADMIN") {
                console.log('Dev');
                res.status(403).send({ message: "UnAuthorized access." });
                return;
            }
        }
        next();
    } catch (error){
        console.log("error", error);
        next(error);
        return;
    }
};
