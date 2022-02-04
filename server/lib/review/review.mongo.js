import mongoose from "mongoose";
import { memberSchema } from "../member/member.schema.js";
import { User } from "../member/member.mongo.js";
import reviewSchemaExtension from "./review.model.js";
const { Schema, model } = mongoose,
  { ObjectId } = Schema.Types;

const reviewSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

reviewSchema.loadClass(reviewSchemaExtension);


const Review = model("Review", reviewSchema);

export { Review };
