import { getAllreviews } from "./review.model.js";
import { say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Review } from "../review/review.mongo.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

async function addReview(request, response) {
  const id = request.session.userID;
  console.log(id);
  const { userID } = request.params;
  const { stars, feedback } = request.body;
  const user = await User.findOne({ username: userID });
  const review = new Review({
    owner: id,
    stars,
    feedback
  });
  user.reviews.push(review);
  await user.save();
  await review.save();
  response.json(say(true, "review added", review));
}

export { addReview };