const {addNewPost,getAllPosts,getPostById,getAllPostsbyUserId,updatePostbyId,deletePostbyId} = require("../services/postServices")
const addPostController = async(req,res)=>{
    const {id,userId,title,body} = req.body;
    if(userId==null || title==null|| body==null) {
        return res.send("Insufficient Data");
    }
    const response = await addNewPost(id, userId, title, body);
    return res.json(response);
} 
const getPostController = async(req,res)=>{
    let response = {};
    if(req.param['id']!==undefined) {
        console.log("calling")
        response  = await getPostById(req.params.id);
    }
    else if(req.params['userId']!==undefined){
        console.log(req.params['userId']);
        response = await getAllPostsbyUserId(req.params['userId']);
    }
    else
        response = await getAllPosts();
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
module.exports = {addPostController,getPostController,updatePostController,deleteController};