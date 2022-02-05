import { createRouterSchema, createRouter } from "../../utils/ExpressHelper.js";
import * as controller from "./member.controller.js";
import { validateMember } from "./member.util.js";
import { isLoggedin } from "../../middleware/isLoggedin.js";

const schema = createRouterSchema({
  signup: ["post", "/checkin", validateMember, controller.memberSignup],

  login: ["post", "/login", controller.memberSignin],

  logout: ["get", "/logout", controller.logout],

  allMembers: ["get", "/all", isLoggedin, controller.fetchMembers],

  profile: ["get", "/profile/:userID", isLoggedin, controller.memberProfile],

  profilePic: ["post", "/:userID/pic", isLoggedin, controller.uploadPic]
});

const memberRouter = createRouter(schema);

export { memberRouter };
