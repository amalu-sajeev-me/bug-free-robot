import { say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Review } from "../review/review.mongo.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const { connection } = mongoose;

async function addReview(request, response) {
  const { stars, feedback } = request.body;
  const { userID } = request.session;
  const session = await connection.startSession();
  await session.withTransaction(async () => {
    const owner = await User.findById(userID);
    const review = new Review({ owner, stars, feedback });
    owner.reviews.push(review);
    await owner.save();
    await review.save();
  }).then(() => {
    response.json(say(true, "succesfully added the review"))
  });
}

async function getReviews(request, response) {
  const { userID } = request.params;
  const user =
    await User.findOne({ username: userID }, { reviews: true })
      .populate("reviews");
  response.json(user);
}



async function updateReview(request, response) {
  const { id } = request.params;
  const { stars, feedback } = request.body;
  const successMsg = [true, "succesfully updated the review"];
  const updatedReview = await Review.findOneAndUpdate(
    { _oid: id },
    { $set: { stars, feedback } }
  );
  console.log(updatedReview);
  response.json(say(...successMsg));
}

async function removeReview() {

}






export {getReviews, addReview, updateReview, removeReview };