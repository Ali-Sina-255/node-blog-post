class ApiError extends Error {
  constructor(statusCode, message, isOptional = true, stack = "") {
    super(message);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    this.statusCode = statusCode;
    this.isOptional = isOptional;
  }
}
module.exports = ApiError;
