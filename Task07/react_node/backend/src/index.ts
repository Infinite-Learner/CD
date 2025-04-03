//Required Modules.
import express from "express";
import path from "path";
import cors from "cors";
import { AppDataSource } from "./data/AppDataSource";
import postRoutes from "./routes/post.routes";
import userRoutes from "./routes/user.routes";
import { ErrHandler } from "./middlewares/req.error";
import { rateLimiter } from "./helper/rateLimit";
import session from "express-session"

//App Initialization with basic functionalities.
const app: express.Application = express();
const PORT: Number = 3001;
app.use(cors())
app.use(express.json());
app.use(rateLimiter);

//Session Initialization
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

//front-end linking
app.use(express.static(path.join(__dirname,"../../frontend")))

//Routes configurations.
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use(ErrHandler);
// app.get("/", (req, res) => {
//   res.json({message:"its reply from server"})
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../../frontend/postApp/index.html"))
});

//Server Startup.
app.listen(PORT || 3002 || 3003, async () => {
  console.log("server Connected");
  await AppDataSource.initialize();
});
