import { scream, say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { Action } from "../actions/action.mongo.js";
import mongoose from "mongoose";
const { connection } = mongoose;



async function memberSignup(request, response) {
  const data = request.body;
  const existingUserMsg = [401, `user already exists`];
  const successMsg = [true, `succesfully created your account`];
  const failureMsg = [401, `failed to create the account`];
  const session = await connection.startSession();

  (await User.userAlreadyExists(data)) && scream(...existingUserMsg);
  await session.withTransaction(trancaction);
  await session.endSession();

  async function trancaction() {
    const actionParams = ["USER", "Account Registration"];
    const action = Action.activity(...actionParams);
    const newUser = new User({...data, actions: action});
    await newUser.registerAccount();
    await action.save();
    !(newUser instanceof User) && scream(...failureMsg);
    response.json(say(...successMsg));
  }
}

async function memberSignin(request, response) {
  const data = request.body;
  const successMsg = [true, `you've succesfully loggedin! yayyy`];
  const failureMsg = [401, `invalid credentials`];
  const session = await connection.startSession();

  await session.withTransaction(transaction);
  await session.endSession();
  async function transaction() {
    const result = await User.login(data);
    console.log(result);
    if (result) {
      request.session.userID = result;
      response.json(say(...successMsg));
    } else scream(...failureMsg);
  }
}

async function fetchMembers(request, response) {
  const result = await User.find({}, { firstName: 1, lastName: 1 });
  const successMsg = [true, null, result];
  const failureMsg = [401, `couldn't fetch the members`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

async function memberProfile(request, response) {
  const { userID } = request.params;
  const result = await User.findOne({ username: userID }, { password: false });
  const successMsg = [true, null, result];
  const failureMsg = [404, `such a user doesn't exists`];
  !result && scream(...failureMsg);
  response.json(say(...successMsg));
}

async function updateProfile(request, response) {}

function logout(request, response) {
  request.session.destroy();
  response.send("logged out");
}

async function uploadPic(request, response) {
  if (!request.file) scream(401, "upload failed");
  const { userID } = request.session;
  const { path } = request.file;
  const user = await User.findByIdAndUpdate(userID, {$set: {profilePic: path}})
  user && response.json(say(true, "succesfully updated your profile picture"));
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
