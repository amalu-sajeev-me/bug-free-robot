import { createUser, findUsers, login } from "./member.model.js";
import { APIResponse, APIError } from "../../utils/index.js";

async function memberSignup(request, response, next) {
  const result = await createUser(request.body);
  const successMsg = `succesfully created your account`;
  const failureMsg = `failed to create the account`;
  if (result) response.json(new APIResponse(true, successMsg));
  else throw new APIError(401);
}

async function fetchMembers(request, response) {
  const result = await findUsers({});
  if (result) response.json(new APIResponse(true, null, result));
  else throw new APIError(401, `couldn't fetch the members`);
}

async function memberSignin(request, response) {
  const result = await login(request.body);
  const successMsg = `you've succesfully loggedin! yayyy`;
  if (result) response.json(new APIResponse(true, successMsg, result));
  else throw new APIError(401, `invalid credentials`);
}

export { memberSignup, memberSignin, fetchMembers };
