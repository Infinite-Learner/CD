const {addNewPost,getAllPosts,getPostById,getAllPostsbyUserId,updatePostbyId,deletePostbyId} = require("../services/postServices")
const addPostController = async(req,res)=>{
    const {id,userId,title,body} = req.body;
    if(userId==null || title==null|| body==null) {
        return res.send("Insufficient Data");
    }
    const response = await addNewPost(id, userId, title, body);
    return res.json(response);
} 
const getAllPostsController = async(req,res)=>{
    response = await getAllPosts();
    return res.json(response);
}
const getPostByIdController = async(req,res)=>{
    if(req.param['id']===undefined) {
        return res.json({message:"Invalid URL or Id is not defined.",success:false});
    }
    response  = await getPostById(req.params.id);
    return res.json(response);
}
const getPostsByUserController = async(req,res)=>{
    if(req.param['userId']===undefined) {
        return res.json({message:"Invalid URL or userId is not defined.",success:false});
    }
    response  = await getPostsByUser(req.params.userId);
    return res.json(response);
}
const updatePostController = async(req,res)=>{
    let response = {};
    const key = req.params.id;
    response = await getPostById(key);
    const {id,userId,title,body} = req.body;
    if(response.data.length<1)
       return res.json({success:false,message:"Post doesn't exists."});
    response = await updatePostbyId(key,id,userId,title,body);
    res.json(response);
}

const deleteController = async(req,res)=>{
    let response = {};
    const id = req.params.id;
    response = await getPostById(id);
    if(response.data.length<1)
       return res.json({success:false,message:"Post doesn't exists."});
    response = await deletePostbyId(id);
    res.json(response);
}
module.exports = {addPostController,getAllPostsController,getPostByIdController,getPostsByUserController,updatePostController,deleteController};