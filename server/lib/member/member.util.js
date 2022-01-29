import { APIError } from "../../utils/APIError.js";
import { memberSchema } from "./member.schema.js";

async function validateMember(request, response, next) {
  const memberDetails = request.body;
  const { error, value } = await memberSchema.validateAsync(memberDetails);
  if (error) throw new APIError(401, error.details);
  else next();
}

export { validateMember };
