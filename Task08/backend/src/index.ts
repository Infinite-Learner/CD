import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import { AppDataSource } from "./data/AppDataSource";
import { log } from "console";
import repoRoutes from "./routes/repo.routes";
const app: express.Application = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("Hi");
  res.send("HI");
  return;
});
app.get("/getAccessToken", async (req: Request, res: Response) => {
  try {
    const CLIENT_ID = process.env.GH_CLIENT_ID;
    const CLIENT_SECRET = process.env.GH_CLIENT_SECRET;
    const code = req.query.code;
    console.log(code);
    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:5173`
    );
    console.log(data);
    if (data) {
      res.send(data);
      return;
    }
  } catch (error) {
    log(error);
  }
});
app.get("/getRepoDetails", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/Infinite-Learner/repos",
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    res.send(data);
    return;
  } catch (error) {
    console.log(error);
  }
});
app.use("/repo", repoRoutes);
app.listen(3010, () => {
  console.log("Connected");
  AppDataSource.initialize().then(() => console.log("DB connected"));
});
