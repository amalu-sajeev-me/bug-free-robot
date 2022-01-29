import {
  fetchMembers,
  memberSignin,
  memberSignup,
} from "./member.controller.js";
import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { validateMember } from "./member.util.js";

const memberRouter = Router();

memberRouter.route("/all").get(catchAsync(fetchMembers));

memberRouter
  .route("/checkin")
  .post(catchAsync(validateMember), catchAsync(memberSignup));

memberRouter.route("/login").post(catchAsync(memberSignin));

export { memberRouter };
