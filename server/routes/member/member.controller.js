import { member } from "../../model/index.js";

async function memberSignup(request, response) {
  const { body } = request;
  member
    .createUser(body)
    .then((result) => {
      console.log(`succesfully created your account`);
      response.send(`succesfully created your account`);
    })
    .catch(console.log);
}

export { memberSignup };
