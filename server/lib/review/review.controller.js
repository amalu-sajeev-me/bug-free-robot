import { say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Review } from "../review/review.mongo.js";
import { Action } from "../actions/action.mongo.js";

import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const { connection } = mongoose;

async function addReview(request, response) {
  const { stars, feedback } = request.body;
  const { userID } = request.session;
  const action = [`review`, `added a review to ${userID}`];
  const activity = Action.activity(...action);
  const session = await connection.startSession();
  await session
    .withTransaction(async () => {
      const owner = await User.findById(userID);
      const review = new Review({ owner, stars, feedback });
      owner.reviews.push(review);
      await owner.save();
      await review.save();
      await activity.save();
    })
    .then(() => {
      response.json(say(true, "succesfully added the review"));
      session.endSession();
    });
}

async function getReviews(request, response) {
  const { userID } = request.params;
  const user = await User.findOne(
    { username: userID },
    { reviews: true }
  ).populate("reviews");
  response.json(user);
}

async function updateReview(request, response) {
  const { id } = request.params;
  const { stars, feedback } = request.body;
  const action = [`review`, `updated a review of ${id}`];
  const activity = Action.activity(...action);
  const successMsg = [true, "succesfully updated the review"];
  const updatedReview = await Review.findOneAndUpdate(
    { _oid: id },
    { $set: { stars, feedback } }
  );
  await activity.save();
  console.log(updatedReview);
  response.json(say(...successMsg));
}

async function removeReview(request, response) {
  const { id } = request.params;
  const action = [`review`, `deleted a review to ${id}`];
  const activity = Action.activity(...action);
  const session = await connection.startSession();
  const successMsg = [true, `review with id: ${id} deleted`];
  await session
    .withTransaction(async () => {
      const { owner } = await Review.findByIdAndDelete(id);
      const user = await User.findById(owner);
      const index = user.reviews.indexOf(id);
      index && user.reviews.splice(index, 1);
      await user.save();
      await activity.save();
    })
    .then(() => {
      session.endSession();
      response.json(say(...successMsg));
    });
}






export {getReviews, addReview, updateReview, removeReview };