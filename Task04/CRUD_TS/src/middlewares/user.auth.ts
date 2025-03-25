import { configDotenv } from "dotenv";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
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
        if (!isvalid) {
            res.status(403).send("Token Invalid or Expired");
            return;
        }
        next();

    } catch (error) {
    
        res.status(401).send({message:"Token Invalid or Expired"});
            
        return;
    }
}