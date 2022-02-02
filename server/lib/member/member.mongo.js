import mongoose from "mongoose";
import UserSchemaExtension from "./member.model.js";
import { Review } from "../review/review.mongo.js";

const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;


const userSchema = new Schema({
  firstName: {
    type: String,
    alias: "f_name",
    required: true,
    minlength: 3,
    maxlength: 16,
  },
  lastName: {
    type: String,
    alias: "l_name",
    required: true,
    minlength: 3,
    maxlength: 16,
  },
  dateOfBirth: {
    type: String,
    alias: "d_o_b",
    required: true,
  },
  email: String,
  phone: String,
  username: {
    type: String,
    alias: "user",
    required: true,
  },
  password: {
    type: String,
    alias: "pass",
    required: true,
  },
  reviews: {
    type: [ObjectId],
    ref: 'Review'
  }
});

userSchema.loadClass(UserSchemaExtension);

const User = model("User", userSchema);

export { User };

