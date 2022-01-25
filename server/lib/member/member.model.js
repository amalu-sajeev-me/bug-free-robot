import { User } from "./member.mongo.js";

async function createUser(data) {
  const result = await User.create(data)
    .then((result) => {
      console.log(`new user added \n${data}`);
      return true;
    })
    .catch(console.log);
}

async function findUsers(data) {
  return await User.find(data);
}

export { createUser, findUsers };
