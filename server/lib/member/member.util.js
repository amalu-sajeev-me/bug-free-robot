import { scream } from "../../utils/APIError.js";
import { memberSchema } from "./member.schema.js";

async function validateMember(request, response, next) {
  const memberDetails = request.body;
  const { error, value } = await memberSchema.validateAsync(memberDetails);
  error && scream(401, error.details);
  next();
}

export { validateMember };
