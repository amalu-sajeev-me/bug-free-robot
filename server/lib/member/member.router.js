import { fetchMembers, memberSignup } from "./member.controller.js";
import { Router } from "express";

const memberRouter = Router();

memberRouter.route("/").get(fetchMembers);
memberRouter.route("/checkin").post(memberSignup);

export { memberRouter };
