import { APIResponse } from "./APIResponse.js";

function handleError(error, request, response, next) {
  const { message = null, statusCode = 401 } = error;
  const customMsg = `an error occured in express\n${error}`;
  // message ? console.error(message) : console.error(customMsg);
  console.log(error);
  response.status(statusCode);
  response.json(new APIResponse(false, message, error));
}

export { handleError };
