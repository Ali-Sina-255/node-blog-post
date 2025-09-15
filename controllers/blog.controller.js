const Blog = require("../models/blog.model");
const catchAsync = require("../utils/catchAsync");
const createBlog = catchAsync(async (req, res) => {
  await Blog.create(req.body);
  res.send({
    success: "true",
    message: `blog is created ${req.body.title} now`,
  });
});

const getBlog = catchAsync(async (req, res) => {
  const blogs = await Blog.find({});
  res.send({ blogs });
});

module.exports = { createBlog, getBlog };
