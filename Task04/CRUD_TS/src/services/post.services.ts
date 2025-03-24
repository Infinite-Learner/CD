import { AppDataSource } from "../data/AppDataSource";
import { Post_Ts } from "../entities/post.entity";

const postRepo = AppDataSource.getRepository(Post_Ts);
export const addPost = async (data: Record<string, number | string>) => {
  const newPost = postRepo.create(data);
  const response = await postRepo.save(newPost);
  return response;
};
export const getAllPost = async () => {
  const response = await postRepo.find();
  return response;
};
export const getPostbyId = async (key: string | number) => {
  const idKey = key as number;
  const response = await postRepo.findBy({ id: idKey });
  return response;
};
export const getPostsbyuserId = async (key: string | number) => {
  const userIdKey = key as number;
  const response = await postRepo.findBy({ userId: userIdKey });
  return response;
};
export const updatePostbyId = async (
  key: string | number,
  data: Record<string, number | string>
) => {
  const postId = key as number;
  const currentPost = await getPostbyId(postId);
  if (currentPost.length < 1)
    return { success: false, message: "Post doesn't exists" };
  await postRepo.update({ id: postId }, data);
  return await getPostbyId(postId);
};

export const deletePostbyId = async (key: string | number) => {
  const postId = key as number;
  const currentPost = await getPostbyId(postId);
  if (currentPost.length < 1)
    return { success: false, message: "Post doesn't exists" };
  await postRepo.delete({ id: postId });
  return {
    success: true,
    message: "post deleted successfuly",
    post: currentPost,
  };
};
