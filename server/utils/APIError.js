class APIError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.name = "API Error";
    this.message = message;
  }
  static scream(statusCode, message) {
    throw new APIError(statusCode, message);
  }
}
const scream = APIError.scream;
export { APIError, scream };
