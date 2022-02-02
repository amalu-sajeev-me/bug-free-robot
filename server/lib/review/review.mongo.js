import { number } from "joi";
import mongoose from "mongoose";
import { memberSchema } from "../member/member.schema.js";
import { User } from "../member/member.mongo.js";
const { Schema, model } = mongoose,
  { ObjectId } = Schema.Types;

const reviewSchema = new Schema({
  reviewer: {
    type: ObjectId,
    ref: 'User'
  },
  workId: String,
  stars: number,
  feedback: String,
});

const Review = model("review", reviewSchema);

export { Review };
