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

export const getUser = async (email: string) => {
  try {
    return await userRepo.findOne({
      where: {
        email: email,
      },
    });
  } catch (error) {}
};
