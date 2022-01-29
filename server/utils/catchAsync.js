function catchAsync(fn) {
  return function (request, response, next) {
    fn(request, response, next).catch(next);
  };
}

export { catchAsync };
