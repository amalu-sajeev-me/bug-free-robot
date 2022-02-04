import { reviewSchema } from "./review.schema.js";
import { scream } from "../../utils/APIError.js";

async function isValidReview(request, resonse, next) {
  const reviewBody = request.body;
  const { error, value } = await reviewSchema.validateAsync(reviewBody);
  error && scream(401, error.details);
  next();
}

export { isValidReview };
