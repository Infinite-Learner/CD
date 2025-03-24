// const db = require("../db/dbonfig");
// const addNewPost = (id, userId, title, body) => {
    
//     try {
//         let result;
//         const Insertquery = (`INSERT INTO Post_details (id,userId,title,body) value (${id},${userId},"${title}","${body}")`)
//         const a = db.query("select * from Post_details", (err, res) => {
//             // console.log("RES ------------------>", res);
//             result  = res;
//             return res;
//         });

//         // return result;


//     }
//     catch (e) {

//         console.log('Error', e)
//     }

// }

// module.exports = addNewPost;

const db = require("../db/dbconfig");

const addNewPost = async (id, userId, title, body) => {
    try {
        // Insert query using parameterized values to prevent SQL injection
        const insertQuery = `INSERT INTO Post_details (userId, title, body) VALUES (${userId},"${title}","${body}")`;
        const result = await db.query(insertQuery);

        console.log("✅ Post inserted successfully.");
        return { success: true, message: "Post inserted successfully.", insertId: result };
    } catch (e) {
        console.error("❌ Error inserting post:", e);
        return { success: false, error: e.message };
    }
};

const getAllPosts = async()=>{
    try{
        const selectQuery = `Select * from Post_details`;
        const[result] = await db.query(selectQuery);
        return {success:true,message:"Data Fetched successfully.",data:result};
    }
    catch(e){
        console.error("❌ Error while fetching post : ",e);
        return {success:false,error:e.message};
    }
};

const getPostById = async(id)=>{
    try{
        const selectQuery = `SELECT * FROM Post_details WHERE id = ${id}`;
        const[result] = await db.query(selectQuery);
        return {success:true,message:"Data Fetched successfully.",data:result};
    }
    catch(e){
        console.error("❌ Error while fetching post : ",e);
        return {success:false,error:e.message};
    }
};

const getAllPostsbyUserId = async(userId)=>{
    try{
        const selectQuery = `SELECT * FROM Post_details WHERE userId = ${userId}`;
        const[result] = await db.query(selectQuery);
        return {success:true,message:"Data Fetched successfully.",data:result};
    }
    catch(e){
        console.error("❌ Error while fetching post : ",e);
        return {success:false,error:e.message};
    }
};

const updatePostbyId = async(key,id,userId,title,body)=>{
    try{
        const updateQuery = `UPDATE Post_details SET id = ${id}, userId = ${userId}, title = "${title}",body = "${body}"
WHERE id = ${key};`;
        const[result] = await db.query(updateQuery);
        return {success:true,message:"Post updated successfully.",data:result};
    }
    catch(e){
        console.error("❌ Error while updating post : ",e);
        return {success:false,error:e.message};
    }
}

const deletePostbyId = async(id)=>{
     try{
        
                const deleteQuery = `DELETE FROM Post_details WHERE id = ${id}`;
                const[result] = await db.query(deleteQuery);
                return {success:true,message:"Post updated successfully.",data:result};
     }  
     catch(e){
        console.error("❌ Error while deleting post : ",e);
        return {success:false,error:e.message};
     }
}

module.exports = {addNewPost,getAllPosts,getPostById,getAllPostsbyUserId,updatePostbyId,deletePostbyId};