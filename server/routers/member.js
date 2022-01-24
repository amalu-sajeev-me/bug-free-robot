import * as users from "../controllers/users/index.js";
import { Router } from "express";

const router = Router();

router.route("/member/checkin").post(users.create);

export { router as member };
