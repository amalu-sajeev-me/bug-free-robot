import { userController } from "../controller/index.js";
import { Router } from "express";

const memberRouter = Router();

memberRouter.route("/checkin").post(userController.create);

export { memberRouter };
