import { User } from "./member.mongo.js";

async function createUser(data) {
  const result = await User.create(data).then((result) => {
    console.log(`new user added \n${data.username}`);
    return true;
  });
}

async function findUsers(data) {
  return await User.find(data);
}

export { createUser, findUsers };
