import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    email: String,
    phone: String,
    username: String,
    password: String
});

const User = model("user", userSchema);

export default User;