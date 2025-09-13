const express = require("express");
const mongoose = require("mongoose");
const BlogRouter = require("./routes/blog.route");
const config = require("./config/config");

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

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
