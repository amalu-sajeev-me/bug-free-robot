import { createUser, findUsers } from "./member.model.js";

async function memberSignup(request, response) {
  const { body } = request;
  createUser(body)
    .then((result) => {
      console.log(`succesfully created your account`);
      response.send(`succesfully created your account`);
    })
    .catch(console.log);
}

async function fetchMembers(request, response) {
  await findUsers({})
    .then((data) => {
      console.log(data);
      response.json(data);
    })
    .catch(console.log);
}

export { memberSignup, fetchMembers };
