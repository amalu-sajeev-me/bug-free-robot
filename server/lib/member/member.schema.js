import Joi from "joi";

const memberSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(16),
  lastName: Joi.string().alphanum().min(1).max(16),
  dateOfBirth: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  username: Joi.string().min(6).max(16).required(),
  password: Joi.string().alphanum().min(6).max(16),
});

export { memberSchema };
