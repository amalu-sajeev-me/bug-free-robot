import { User } from "./member.mongo.js";
import bcrypt from "bcrypt";

async function createUser(data) {
  const { username } = data;
  const existingUser = await User.exists({ username });
  if (existingUser) throw "user already exists";
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
  if (!user) throw "invalid credentials";
  const hash = user.password;
  const result = await bcrypt.compare(password, hash);
  if (result) console.log(`logged in!!`);
  return result;
}

export { createUser, findUsers, login };
