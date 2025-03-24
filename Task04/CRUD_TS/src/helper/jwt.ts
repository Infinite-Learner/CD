import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = async (email: string, role: string) => {
    const token = jwt.sign({ email: email, role: role }, process.env.JWT_TOKEN as string, { expiresIn: "2m" })

    return token;
}