const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.send({
      success: "true",
      message: `blog is created ${req.body.title} now`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "error occured" });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send({ blogs });
  } catch (error) {
    res.status(500).json({ error: true, message: "error occured" });
  }
};

module.exports = { createBlog, getBlog };
