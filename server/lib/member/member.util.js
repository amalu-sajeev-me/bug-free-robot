import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(16).required(),
  lastName: Joi.string().alphanum().min(3).max(16).required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string(),
  phone: Joi.string(),
  username: Joi.string().min(6).max(12).required(),
  password: Joi.string().min(8).max(16).required(),
});

async function isValidMember(member) {
  const result = await schema.validateAsync(member).catch((err) => {
    console.log(err.details);
    throw err.details;
  });
}

export { isValidMember };
