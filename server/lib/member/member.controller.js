import { scream, say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Action } from "../actions/action.mongo.js";
import mongoose from "mongoose";
const { connection } = mongoose;



const memberSignup = async (req, res) => {
  const { body: data } = req;
  const successMsg = [true, `succesfully created your account`];
  const action = ["member", "member registration"];
  const activity = Action.activity(...action);
  const user = new User({ ...data, actions: activity });

  const session = await connection.startSession();
  await session.withTransaction(transaction);
  await session.endSession();
  async function transaction() {
    const result = await user.registerAccount();
    await activity.save();
    result && res.json(say(...successMsg));
  }
}

const memberSignin = async (req, res) => {
  const successMsg = [true, `you've succesfully loggedin! yayyy`];
  const action = ["member", "logged in"];
  const activity = Action.activity(...action);
  const user = await User.login(req.body);
  user.actions.push(activity);
  await user.save();
  await activity.save();
  req.session.userID = user._id;
  res.json(say(...successMsg));
}

const fetchMembers = async (req, res) => {
  console.log("session will print here\n\n\n");
  console.log(`this is session \n${req.session}`);
  const users = await User.fetchMembers();
  const successMsg = [true, null, users];
  res.json(say(...successMsg));
}

const memberProfile = async (req, res) => {
  const user = await User.findProfile(req.params);
  const successMsg = [true, null, user];
  res.json(say(...successMsg));
}

const logout = (req, res) => req.session.destroy() && res.send("logged out");

async function updateProfile(request, response) {}

async function uploadPic(req, res) {
  if (!req.file) scream(401, "upload failed");
  const { userID } = req.session;
  const { path } = req.file;
  const user = await User.findByIdAndUpdate(userID, {$set: {profilePic: path}})
  user && res.json(say(true, "succesfully updated your profile picture"));
}

export {
  memberSignup,
  memberSignin,
  fetchMembers,
  memberProfile,
  logout,
  updateProfile,
  uploadPic,
};
