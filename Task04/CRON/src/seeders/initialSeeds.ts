import { AppDataSource } from "../data/AppDataSource";
import { Post_CRON} from "../entities/post.entity";
interface post_type {
    id:number,
    userId:number,
    title:string,
    body:string,
    Time : Date
}
export const seedData = async(data:[],time:Date)=>{
const postRepo = AppDataSource.getRepository(Post_CRON);
let post : post_type;
for(post of data){
    const isExist = await postRepo.findBy({id:post?.id});
    if(isExist.length>0 && isExist[0].Time===time){
        console.log("Data already exists");
    }
    else{
        post.Time = time;
        await postRepo.save(post);
        console.log("Data Seeded ", post);
    }

}
console.log("Completed.");
    
};