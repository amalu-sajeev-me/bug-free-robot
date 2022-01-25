import { User } from "./member.mongo.js";
import { isValidMember } from "./member.util.js";

async function createUser(data) {
  const member = await isValidMember(data);
  const result = await User.create(member)
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
