import { User } from "./member.mongo.js";

async function createUser(data) {
  const user = new User(data);
  await user.encryptPassword();
  const newUser = await user.save();
  if (newUser instanceof User) {
    console.log(`new user added \n${newUser.username}`);
    return true;
  }
}

async function findUsers(data) {
  return await User.find(data);
}

export { createUser, findUsers };
