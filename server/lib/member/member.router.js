import { createRouterSchema, createRouter } from "../../utils/ExpressHelper.js";
import * as controller from "./member.controller.js";
import { validateMember } from "./member.util.js";

const schema = createRouterSchema({
  signup: ["post", "/checkin", validateMember, controller.memberSignup],
  login: ["post", "/login", controller.memberSignin],
  allMembers: ["get", "/all", controller.fetchMembers],
  profile: ["get", "/profile/:userID", controller.memberProfile],
  // logout: []
});

const memberRouter = createRouter(schema);

export { memberRouter };
