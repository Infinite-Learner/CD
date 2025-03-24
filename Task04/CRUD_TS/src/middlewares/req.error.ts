import { Request, Response } from "express";

export const ErrHandler  = async(err:Error,req:Request,res:Response)=>{
     console.log("Error" , err);
    
}

