import { createUser } from "../../model/member.model.js";
const create = async (request, response) => {
  const { body } = request;
  createUser(body)
    .then((res) => {
      response.send("user created");
    })
    .catch((e) => {
      response.send(`user not created: ${e.message}`);
    });
};

export default create;
