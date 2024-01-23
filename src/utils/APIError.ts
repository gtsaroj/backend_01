class APIError extends Error {
  message: string;
  statusCode: number;
  error: string[] = [];
  data: null;
  success: false;

  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super();
    this.error = error;
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.message = message;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {APIError}