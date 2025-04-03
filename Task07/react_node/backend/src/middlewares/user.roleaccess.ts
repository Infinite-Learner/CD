import { NextFunction, Request, Response } from "express";
import { roles } from "../roles/user.roles";
import { JwtPayload, verify } from "jsonwebtoken";
import { getUserbyEmail } from "../services/user.services";
import { configDotenv } from "dotenv";

configDotenv();

export const roleAccess = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (token === "") {
            res.send({ message: "Token not found" });
            return;
        }
        const payload = verify(
            token as string,
            process.env.JWT_TOKEN as string
        ) as JwtPayload;
        const user = await getUserbyEmail(payload.email);
        const role = user?.role.toUpperCase();
        const userId:number = parseInt(user?.id as string);
        const paramId:number = parseInt(req.params.id);
        if (user == null || typeof user === "undefined"){
            res.send({ message: "invalid token" });
            return;
        }
        if (req.method === "POST" || req.method === "DELETE"||req.method==="PUT" ||(req.method==='GET' && req.path==="/")){
            if (role === "" || !((role as string) in roles) || role !== "ADMIN"){
                res.status(403).send({ message: "UnAuthorized access." });
                return;
            }
        }
        if(req.method==="GET" && paramId!==userId && req.path==="/u/"){
            
            res.status(403).send({ message: "UnAuthorized access." });
                return;
        }
        
        next();
    } catch (error){
        console.log("error", error);
        next(error);
        return;
    }
};
