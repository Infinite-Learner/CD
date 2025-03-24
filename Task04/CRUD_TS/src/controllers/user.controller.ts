import { Request, response, Response } from "express";
import bcrypt from "bcryptjs";
import { addUser, getUser, isUser } from "../services/user.services";
import { generateToken } from "../helper/jwt";

export const SignUpController = async (req: Request, res: Response) => {
  try {
    const email: string = req.body.email;
    const username: string = req.body.username;
    const password: string = req.body.password;
    const role: string = req.body.role;
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string" ||
      typeof role !== "string"
    ) {
      res.status(400).send("Invalid Paramters or Invalid Request");
      return;
    }
    if (username === "" || password === "" || email === "" || role === "") {
      res.status(400).send("Invalid request paramters or value missing");
      return;
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const response = await addUser(email, username, hashedPass, role);

    res
      .status(response?.status as number)
      .send({ success: response?.success, message: response?.message });
    return;
  } catch (error) {
    console.log();
  }
};

export const LoginController = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  if (typeof password !== "string" || typeof email !== "string") {
    res.send("Invalid Paramters or Invalid Request");
    return;
  }
  if (password === "" || email === "") {
    res.send("Invalid request paramters or value missing");
    return;
  }
  if (!(await isUser(email))) {
    res.send({ success: false, message: "user doesn't exists" });
    return;
  }
  const User = await getUser(email);
  if (typeof User === "undefined" || User == null) {
    res.send({ success: false, message: "user doesn't exists" });
    return;
  }
  const role: string = User?.role as string;
  const isValidPassword = bcrypt.compareSync(password, User.password);
  if (isValidPassword) {
    const token = await generateToken(email, role);
    res.send({ message: "Logged In succcessfully", token: token });
    return;
  }
};
