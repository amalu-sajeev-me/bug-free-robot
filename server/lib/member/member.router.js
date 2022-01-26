import { fetchMembers, memberSignup } from "./member.controller.js";
import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { validateMember } from "./member.util.js";

const memberRouter = Router();

memberRouter.route("/").get(catchAsync(fetchMembers));

memberRouter
  .route("/checkin")
  .post(catchAsync(validateMember), catchAsync(memberSignup));

export { memberRouter };
