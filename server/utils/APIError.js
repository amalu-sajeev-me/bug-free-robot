class APIError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.name = "API Error";
    this.message = message;
  }
}

export { APIError };
