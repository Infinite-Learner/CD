import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { addUser, deleteUserbyId, getAlluser, getUserbyEmail, isUser, updateUser } from "../services/user.services";
import { generateToken } from "../helper/jwt";
import { log } from "console";
import { getPostsbyuserId } from "../services/post.services";

export const SignUpController = async (req: Request, res: Response) => {
  try {
    
    const email: string = req.body.email;
    const username: string = req.body.username;
    const password: string = req.body.password;
    const role: string = req.body.role;
    
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string" ||
      typeof role !== "string"
    ) {
      
      res.status(400).send({success:false,mesage:"Invalid Paramters or Invalid Request"});
      return;
    }
    if (username === "" || password === "" || email === "" || role === "") {
      
      res.status(400).send({success:false,message:"Invalid request paramters or value missing"});
      return;
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const response = await addUser(email, username, hashedPass, role);

    res
      .status(response?.status as number)
      .send({ success: response?.success, message: response?.message });
    return;
  } catch (error) {
    
  }
};

export const LoginController = async (req: Request, res: Response) => {

  
  const email: string = req.body.email;
  const password: string = req.body.password;
  
  if (typeof password !== "string" || typeof email !== "string") {
    res.send("Invalid Paramters or Invalid Request");
    return;
  }
  if (password === "" || email === "") {
    res.send("Invalid request paramters or value missing");
    return;
  }
  if (!(await isUser(email))) {
    res.send({ success: false, message: "user doesn't exists" });
    return;
  }
  const User = await getUserbyEmail(email);
  if (typeof User === "undefined" || User == null) {
    res.send({ success: false, message: "user doesn't exists" });
    return;
  }

  
  const role: string = User?.role as string;
  const isValidPassword = bcrypt.compareSync(password, User.password);

  
  if (!isValidPassword) {
    res.send({ success:false,message: "Incorrect Password" });
    return;
  }
  const token = await generateToken(email, role);
    res.send({ success:true,message: "Logged In succcessfully", token: token,userId:User.id,role:User.role});
    return;
};

export const getUserController=async(req:Request,res:Response)=>{  
  const data = await getAlluser();
  res.send(data);
  return;

};

export const getUsersPostController=async(req:Request,res:Response)=>{
    try {
      if(req.params.id===null || req.params.id===''){
        res.status(404).send({message:"userId missing"});
        return;
      }
      const userPost = await getPostsbyuserId(req.params.id);
      res.send({success:true,message:"User post ar fetched",data:userPost})
    } catch (error) {
      
    }
}
export const deleteUserController =async(req:Request,res:Response)=>{
  
    try {
      if(req.params.id==='undefined'||req.params.id==''){
        res.status(404).send({message:"userId missing"});
        return;
      }
      const deletedUser = await deleteUserbyId(req.params.id);
      res.send({success:true,message:deletedUser.message,data:deletedUser.user})
      return;
  } catch (error) {
    
  }
}
 
export const updateUserController = async(req:Request,res:Response)=>{
  console.log(req.params.id);
  console.log(req.body);
  
  
  try {
    if(req.params.id==='undefined'||req.params.id==''){
      res.status(404).send({message:"userId missing"});
      return;
    }
    const updatedUser = await updateUser(req.params.id,req.body);
    
    res.send({success:true,message:"User detail updated",user:updatedUser})
    return;
  } catch (error) {
    
  }
}