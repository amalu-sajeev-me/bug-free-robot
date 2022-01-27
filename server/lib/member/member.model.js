import { User } from "./member.mongo.js";


async function createUser(data) {
  const { username } = data;
  const existingUser = await User.exists({ username });
  if (existingUser) throw "user already exists";
  // console.log(existingUser);
  const user = new User(data);
  const result = await user.createAccount();
  if (!result) return false;
  else return true;
}

async function findUsers(data) {
  return await User.find(data);
}

export { createUser, findUsers };
