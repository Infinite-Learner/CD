import { schedule } from "node-cron";
import express from "express"
import { AppDataSource } from "./data/AppDataSource";
import { seedData } from "./seeders/initialSeeds";
const app = express()


schedule(" */5 * * * *", async()=> {
    try{
    let i =1;
    const response  = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok) return "Failed";
    const data = await response.json();
    await seedData(data,new Date());
    console.log(`${i}th-minute`);
    
}
catch(err){
    console.log(err);
    
}
    });
app.listen(3005,async()=>{
    await AppDataSource.initialize();
});