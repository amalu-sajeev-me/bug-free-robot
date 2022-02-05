import { scream, say } from "../../utils/index.js";
import { User } from "../member/member.mongo.js";
import { v2 as cloudinary } from "cloudinary";

async function memberSignup(request, response) {
  const data = request.body;
  const existingUserMsg = [401, `user already exists`];
  const successMsg = [true, `succesfully created your account`];
  const failureMsg = [401, `failed to create the account`];
  (await User.userAlreadyExists(data)) && scream(...existingUserMsg);
  const newUser = await new User(data).registerAccount();
  !(newUser instanceof User) && scream(...failureMsg);
  response.json(say(...successMsg));
}

async function memberSignin(request, response) {
  const data = request.body;
  const result = await User.login(data);
  const successMsg = [true, `you've succesfully loggedin! yayyy`, result];
  const failureMsg = [401, `invalid credentials`];
  if (result) {
    request.session.userID = result;
    response.json(say(...successMsg));
  } else scream(...failureMsg);
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
