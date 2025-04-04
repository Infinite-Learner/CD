import { log } from "console";
import { AppDataSource } from "../data/AppDataSource";
import { repo_details } from "../entities/repo.entity";

const repo_detailsRepo = AppDataSource.getRepository(repo_details);

export const getAllRepos = async () => {
  try {
    return await repo_detailsRepo.find();
  } catch (error) {
    console.log(error);
  }
};

export const AddRepos = async (data: repo_details[]) => {
  try {

    const addedRepos = data.map(async (Repo) => {
      const CreatedRepo = repo_detailsRepo.create(Repo);
       await repo_detailsRepo.save(CreatedRepo);
    });
    
    return {success:true};
  } catch (error) {
    log(error);
  }
};

export const getRepobyId = async (id:number) => {
  try {
    return await repo_detailsRepo.findOne({
      where: {
        id:id,
      },
    });
  } catch (error) {}
};

export const updateRepoById=async (
  key: number,
  data: Record<string, number | string>
) => {
  const repoId = key ;
 try {
  console.log("up");
  console.log(key);
  
   const currentUser = await repo_detailsRepo.findBy({id:repoId});
   console.log(currentUser);
   
   if (currentUser.length < 1){
    console.log("fails");
    
     return { success: false, message: "User doesn't exists" };}
     console.log("JI");
   console.log(await repo_detailsRepo.update({ id: repoId }, data));
   
   const updatedUser = await repo_detailsRepo.find({where:{id:key}});
   console.log(updatedUser);
   
   return updatedUser;
 } catch (error) {
  
 }
}


export const deleteRepobyId = async (key: number) => {
  const id = key;
  const repo = await getRepobyId(key);
  if (!repo)
    return { success: false, message: "User doesn't exists" };
  await repo_detailsRepo.delete({ id: key });
  return {
    success: true,
    message: "user details removed successfuly",
    repo:repo,
  };
};