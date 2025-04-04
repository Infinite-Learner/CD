import { Request, Response, Router } from "express"
import { addRepoController, deleteRepoController, getAllRepoController, updateRepoController } from "../controller/repo.controller";

const router = Router();

router.get("/",(req:Request,res:Response)=>{console.log("Log");
    res.send("Delete")
})
router.post("/addRepoDetails",addRepoController);
router.get("/allRepo",getAllRepoController);
router.delete("/deleteRepo/:id",deleteRepoController);
router.put("/updateRepo/:id",updateRepoController)
export default router;
