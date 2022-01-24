import * as users from "../controllers/users";
import { Router } from "express";

const router = Router();

router.route("member/checkin").post(users.create);

export { router as member };