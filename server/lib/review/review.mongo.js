import { number } from "joi";
import mongoose from "mongoose";
import { memberSchema } from "../member/member.schema";
const { Schema, model } = mongoose,
  { ObjectId } = Schema;

const reviewSchema = new Schema({
  reviewer: {
    type: ObjectId,
  },
  workId: String,
  stars: number,
  feedback: String,
});

const Review = model("review", reviewSchema);

export { Review };
