import { AppDataSource } from "../data/AppDataSource";
import { Post_Ts } from "../entities/post.entity";

const post_data = [
    {
        "id":1,
        "userId":1,
        "title":"Test Post 1",
        "body":"Test Body"
    }
    ,
    {
        "id":2,
        "userId":2,
        "title":"Test Post 2",
        "body":"Test Body"
    }
    ,  {
        "id":3,
        "userId":3,
        "title":"Test Post 3",
        "body":"Test Body"
    },
    {
        "id":4,
        "userId":4,
        "title":"Test Post 3",
        "body":"Test Body"
    }
]
AppDataSource.initialize().then(
    async()=>{
const postRepo = AppDataSource.getRepository(Post_Ts);
for(const post of post_data){
    const isExist = await postRepo.findBy({id:post?.id});
    if(isExist.length>0){
        console.log("Data already exists");
    }
    else{
        await postRepo.save(post);
        console.log("Data Seeded ", post);
    }

}
console.log("Completed.");

});