class APIResponse {
  constructor(status, message, response = null) {
    this.name = "API Response";
    this.status = status;
    this.message = message;
    if (response) this.response = response;
  }
}

export { APIResponse };
