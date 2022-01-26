import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

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
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods.encryptPassword = async function () {
  const saltRounds = 12;
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
};






const User = model("User", userSchema);

export { User };
