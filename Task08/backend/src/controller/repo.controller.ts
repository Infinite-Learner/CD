import { Request, Response } from "express";
import { AddRepos, deleteRepobyId, getAllRepos, updateRepoById } from "../services/repo.services";

export const addRepoController = async(req:Request,res:Response)=>{
    try {
            const data = await AddRepos(req.body?.processed_data);
            res.send({success:data?.success,data:await getAllRepos()});

            return;
         }
         
     catch (error) {
        console.log(error);
     }   
    }

export const getAllRepoController = async(req:Request,res:Response)=>{
    try {
        console.log("HI");
        
        if(req.headers.authorization===''||req.headers.authorization?.split(" ")[1]===''){
            res.send({success:false});
        }
        const allRepo = await getAllRepos();
        res.send({success:true,repo:allRepo})
         return;
   } catch (error) {
       console.log(error);
       
   }
}

export const deleteRepoController =async(req:Request,res:Response)=>{
  
    try {
      if(req.params.id==='undefined'||req.params.id==''){
        res.status(404).send({message:"userId missing"});
        return;
      }
      const deletedRepo = await deleteRepobyId(parseInt(req.params.id));
      res.send({success:true,message:deletedRepo.message,data:deletedRepo.repo})
      return;
  } catch (error) {
    
  }
}
 
export const updateRepoController = async(req:Request,res:Response)=>{
  console.log(req.params.id);
  console.log(req.body);
  
  
  try {
    if(req.params.id==='undefined'||req.params.id==''){
      res.status(404).send({message:"userId missing"});
      return;
    }
    const updatedUser = await updateRepoById(parseInt(req.params.id),req.body);
    
    res.send({success:true,message:"User detail updated",user:updatedUser})
    return;
  } catch (error) {
    
  }
}