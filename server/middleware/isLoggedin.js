function isLoggedin(request, response, next) {
  if (!request.session.userID) scream(403, "you must login first");
  else next();
}

export { isLoggedin };
