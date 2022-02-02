import { getAllreviews } from "./review.model.js";
import { User } from "../member/member.mongo.js";
import { Review } from "../review/review.mongo.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

async function addReview(request, response) {
  const id = request.session.userID;
  const { userID } = request.params;
  const { stars, feedback } = request.body;
  const user = await User.findOne({ username: userID });
  const review = new Review({
    reviewer: id,
    stars,
    feedback
  });
  user.reviews.push(review);
  user.save();
  console.log(user);
  response.json(user);
}

export { addReview };