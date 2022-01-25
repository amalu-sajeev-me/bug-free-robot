import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  email: String,
  phone: String,
  username: String,
  password: String,
});

const User = model("user", userSchema);

export { User };
