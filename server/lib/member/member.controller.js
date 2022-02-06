import { scream, say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Action } from "../actions/action.mongo.js";
import mongoose from "mongoose";
const { connection } = mongoose;



const memberSignup = async (req, res) => {
  const { body: data } = req;
  const successMsg = [true, `succesfully created your account`];
  const user = new User(data);
  const result = await user.registerAccount();
  result && res.json(say(...successMsg));
}

const memberSignin = async (req, res) => {
  const successMsg = [true, `you've succesfully loggedin! yayyy`];
  const user = await User.login(req.body);
  req.session.userID = user._id;
  res.json(say(...successMsg));
}

const fetchMembers = async (req, res) => {
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
