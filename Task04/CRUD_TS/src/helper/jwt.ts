import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();
export const generateToken = async (email: string, role: string) => {
    try {
        console.log(process.env.JWT_TOKEN);
        
        const token = jwt.sign({ email: email, role: role }, process.env.JWT_TOKEN as string, { expiresIn: "2m" })
        return token;
    } catch (error) {
        console.log(error);
        
    }
}