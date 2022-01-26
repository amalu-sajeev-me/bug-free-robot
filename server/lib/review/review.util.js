import Joi from "joi";

const schema = Joi.object({
  reviewer: Joi.string(),
  workId: Joi.string(),
  stars: Joi.number,
  feedback: Joi.string().min(3).max(64),
});

async function isValidReview(review) {
  return await schema.validateAsync(review);
}

export { isValidReview };
