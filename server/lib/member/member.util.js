import { memberSchema } from "./member.schema.js";

async function validateMember(request, response, next) {
  const memberDetails = request.body;
  const { error, value } = await memberSchema.validateAsync(memberDetails);
  if (error) throw error;
  else next();
}

export { validateMember };
