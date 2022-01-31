import Joi from "joi";

const messageSchema = Joi.object({
  fromUser: Joi.string().alphanum().min(3).max(16),
  toUser: Joi.string().alphanum().min(3).max(16),
  message: Joi.string().alphanum().min(2).max(100),
});
export { messageSchema };
