import { fetchMembers, memberSignup } from "./member.controller.js";
import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";

const memberRouter = Router();

memberRouter.route("/").get(catchAsync(fetchMembers));
memberRouter.route("/checkin").post(catchAsync(memberSignup));

export { memberRouter };
