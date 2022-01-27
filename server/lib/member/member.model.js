import { User } from "./member.mongo.js";
import bcrypt from "bcrypt";
import { APIError } from "../../utils/APIError.js";

async function createUser(data) {
  const { username } = data;
  const existingUser = await User.exists({ username });
  if (existingUser) throw new APIError(401, `user already exists`);
  const user = new User(data);
  const result = await user.createAccount();
  if (!result) return false;
  else return true;
}

async function findUsers(data) {
  return await User.find(data, { firstName: 1, lastName: 1 });
}

async function login({ username, password }) {
  const user = await User.findOne({ username }, { username: 1, password: 1 });
  if (!user) throw new APIError(401, `invalid credentials`);
  const hash = user.password;
  const result = await bcrypt.compare(password, hash);
  if (result) console.log(`logged in!!`);
  else throw new APIError(401, `invalid credentials`);
  return user._id;
}

export { createUser, findUsers, login };
