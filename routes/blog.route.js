const express = require("express");
const { createBlog, getBlog } = require("../controllers/blog.controller");
const {
  createBlogValidationSchema,
} = require("../validations/blog.validation");
const validate = require("../middlewares/validate");
const route = express.Router();
route.get("/blogs", getBlog);
route.post("/blog", validate(createBlogValidationSchema), createBlog);

module.exports = route;
