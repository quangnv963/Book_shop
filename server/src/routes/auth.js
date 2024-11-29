import { Router } from "express";
import { signin, signup, signGoogle} from "../controllers/auth";

const router = Router();
router.post("/signup", signup)
router.post("/signupgg", signGoogle )
router.post("/signin", signin)

export default router;
