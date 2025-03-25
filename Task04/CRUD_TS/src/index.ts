//Required Modules.
import express from "express";
import { AppDataSource } from "./data/AppDataSource";
import postRoutes from "./routes/post.routes";
import userRoutes from "./routes/user.routes";
import { ErrHandler } from "./middlewares/req.error";
import { rateLimiter } from "./helper/rateLimit";

//App Initialization with basic functionalities.
const app: express.Application = express();
const PORT: Number = 3001;
app.use(express.json());
app.use(rateLimiter);

//Routes configurations.
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use(ErrHandler);
app.get("/", (req, res) => {
  res.send("HELOO");
});
app.post("/", (req, res) => {
  const secret = req.headers["authorization"]?.replace("Bearer ", "");

  if (req.body.role === "Admin") res.send({ req: req.body, token: secret });
});

//Server Startup.
app.listen(PORT || 3002 || 3003, async () => {
  console.log("server Connected");
  await AppDataSource.initialize();
});
