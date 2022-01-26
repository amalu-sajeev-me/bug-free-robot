function handleError(error, request, response, next) {
  console.log(`error occured in express\n${error}`);
  response.send(`error: ${error.message}`);
}

export { handleError };
