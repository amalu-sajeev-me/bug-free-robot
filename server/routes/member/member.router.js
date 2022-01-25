import { memberSignup } from "./member.controller.js";
import { Router } from "express";

const memberRouter = Router();

memberRouter.route("/checkin").post(memberSignup);

export { memberRouter };
