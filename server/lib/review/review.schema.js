import Joi from "joi";

const reviewSchema = Joi.object({
    stars: Joi.number().min(1).max(5).required(),
    feedback: Joi.string().min(3).max(64).required()
});


export { reviewSchema };