import { Review } from "./review.mongo.js";

async function getAllreviews({ username }) {
  return await Review.find({ username });
}

export { getAllreviews };
