import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";
import * as jwt from "jsonwebtoken";
interface Msg_Code{
     'invalid token':{message:string,status:number};
};
export const ErrHandler :ErrorRequestHandler = async(err:unknown,req:Request,res:Response,next:NextFunction)=>{
     let errorcode = 404;
     let messages  = "Not Found";
     if(isHttpError(err)){
          errorcode = err.statusCode;
          messages  = err.message;
          res.status(errorcode).send(messages);
          return;
     }
     if(err instanceof jwt.JsonWebTokenError){
          let errcode = 401;
          let errmsg = {"invalid token":401,"invalid signature":401,"jwt malformed":401,'jwt expired':401};
          console.log((err.message in errmsg));
          
          if(!(err.message in errmsg)){errcode = 400};
          res.status(errcode).send({message:`Request Forbidden : ${err.message}`});
          
          return;
     }
     next();
     }
    
