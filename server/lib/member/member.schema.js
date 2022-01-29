import Joi from "joi";

const memberSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(16),
  f_name: Joi.string().alphanum().min(3).max(16),
  lastName: Joi.string().alphanum().min(1).max(16),
  l_name: Joi.string().alphanum().min(1).max(16),
  dateOfBirth: Joi.string(),
  d_o_b: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  username: Joi.string().min(6).max(16).required(),
  user: Joi.string().min(6).max(16),
  password: Joi.string().alphanum().min(6).max(16),
  pass: Joi.string().alphanum().min(6).max(16),
})
  .xor("firstName", "f_name")
  .xor("lastName", "l_name")
  .xor("dateOfBirth", "d_o_b")
  .xor("username", "user")
  .xor("password", "pass");

export { memberSchema };
