import { AppDataSource } from "../data/AppDataSource";
import { userDetails } from "../entities/user.entity";

const userRepo = AppDataSource.getRepository(userDetails);
export const addUser = async (
  email: string,
  username: string,
  password: string,
  role: string
) => {
  try {
    if ((await userRepo.findBy({ email })).length > 0) {
      return { status: 403, success: false, message: "User already Exists" };
    }
    const newUser = userRepo.create({ email, username, password, role });
    if (await userRepo.save(newUser))
      return {
        success: true,
        message: "User Resgistered successfully.",
        status: 200,
      };
    return { status: 500, success: false, message: "Internal Server error" };
  } catch (error) {}
};
export const isUser = async (email: string) => {
  try {
    return (await userRepo.findBy({ email })).length;
  } catch (error) {}
};

export const getUserbyEmail = async (email: string) => {
  try {
    return await userRepo.findOne({
      where: {
        email: email,
      },
    });
  } catch (error) {}
};

export const getUserbyId = async (id: string) => {
  try {
    return await userRepo.findOne({
      where: {
        id:id,
      },
    });
  } catch (error) {}
};


export const getAlluser = async () => {
  try {
    return await userRepo.find({
      select: { id:true,username: true, email: true, role: true },
    });
  } catch (error) {}
};

export const updateUser=async (
  key: string ,
  data: Record<string, number | string>
) => {
  const userId = key ;
 try {
  console.log("up");
  console.log(key);
  
   const currentUser = await userRepo.findBy({id:userId});
   console.log(currentUser);
   
   if (currentUser.length < 1){
    console.log("fails");
    
     return { success: false, message: "User doesn't exists" };}
     console.log("JI");
   console.log(await userRepo.update({ id: userId }, data));
   
   const updatedUser = await userRepo.find({where:{id:key},select:{username:true,
    email:true,
    role:true
   }});
   console.log(updatedUser);
   
   return updatedUser;
 } catch (error) {
  
 }
}


export const deleteUserbyId = async (key: string) => {
  const userId = key;
  const user = await getUserbyId(key);
  if (!user)
    return { success: false, message: "User doesn't exists" };
  await userRepo.delete({ id: key });
  return {
    success: true,
    message: "user details removed successfuly",
    user:user,
  };
};
