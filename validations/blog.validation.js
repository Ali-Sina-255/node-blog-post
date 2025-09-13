const Joi = require("joi");

const createBlogValidationSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().min(10).required(),
  }),
};

module.exports = { createBlogValidationSchema };
