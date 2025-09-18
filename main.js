const express = require("express");
const mongoose = require("mongoose");
const BlogRouter = require("./routes/blog.route");
const config = require("./config/config");
const { errorHandler, errorConverter } = require("./middlewares/errors.js");
const ApiError = require("./utils/ApiError.js");
const httpStatus = require("http-status");
const logger = require("./config/logger.js");

// server app
const app = express();

// mongoose
mongoose
  .connect(config.DB_URL)
  .then(() => {
    console.log("mongoose connected successfully");
  })
  .catch((error) => console.log("Mongoose connection error:", error));

// routing
app.use(express.json());
app.use(BlogRouter);
app.use(errorHandler);
app.use(errorConverter);

api.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not FOUND"));
});

app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
});

const exitHandle = () => {
  if (server) {
    server.close(() => {
      console.log("server is closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on("uncaughtException", unExpectedErrorHandler);
process.on("unhandleRejection", unExpectedErrorHandler);
const unExpectedErrorHandler = (error) => {
  console.log(error);
  exitHandle();
};
