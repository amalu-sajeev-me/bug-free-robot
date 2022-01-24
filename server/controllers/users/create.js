const create = async (request, response) => {
  const { body } = request;
  console.log(body);
  response.send("signup");
};

export default create;
