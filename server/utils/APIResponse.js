class APIResponse {
  constructor(status, message, response = null) {
    this.name = "API Response";
    this.status = status;
    this.message = message;
    if (response) this.response = response;
  }
  static say(status, message, response = null) {
    return new APIResponse(status, message, response);
  }
}

const say = APIResponse.say;
export { APIResponse, say };
