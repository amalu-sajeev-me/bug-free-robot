import { createUser, findUsers, login } from "./member.model.js";

async function memberSignup(request, response, next) {
  const { body } = request;
  createUser(body)
    .then((result) => {
      console.log(`succesfully created your account`);
      response.send(`succesfully created your account`);
    })
    .catch(next);
}

async function fetchMembers(request, response) {
  await findUsers({})
    .then((data) => {
      console.log(data);
      response.json(data);
    })
    .catch(console.log);
}

async function memberSignin(request, response) {
  const result = await login(request.body);
  if (result) response.send(`loggedin yayyy`);
  else response.send(`oops! wrong credentials!`);
}

export { memberSignup, memberSignin, fetchMembers };
