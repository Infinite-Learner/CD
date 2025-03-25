import { Request, Response } from "express";
import {
  addPost,
  deletePostbyId,
  getAllPost,
  getPostbyId,
  getPostsbyuserId,
  updatePostbyId,
} from "../services/post.services";


export const addPostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = await addPost(req.body);
  res.json({message:"Post Added",response});
};

export const getAllPostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = await getAllPost();
  res.json(response);
};

export const getPostByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (isNaN(parseInt(req.params.id))) {
    res.send({ success: false, message: "Invalid URL or Id is not valid" });
    return;
  }
  const response = await getPostbyId(req.params.id);
  res.json(response);
};
export const getPostsByuserIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (isNaN(parseInt(req.params.userId))) {
    res.send({ success: false, message: "Invalid URL or Id is not valid" });
    return;
  }
  const response = await getPostsbyuserId(req.params.userId);
  res.json(response);
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (isNaN(parseInt(req.params.id))) {
    res.send({ success: false, message: "Invalid URL or Id is not valid" });
    return;
  }
  const response = await updatePostbyId(req.params.id, req.body);
  res.json(response);
};

export const deletePostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("delete");

  if (isNaN(parseInt(req.params.id))) {
    res.send({ success: false, message: "Invalid URL or Id is not valid" });
    return;
  }
  const response = await deletePostbyId(req.params.id);
  res.json(response);
};
