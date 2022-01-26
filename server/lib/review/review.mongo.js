import { number } from "joi";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  reviewer: String,
  workId: String,
  stars: number,
  feedback: String,
});

const Review = model("review", reviewSchema);

export { Review };
