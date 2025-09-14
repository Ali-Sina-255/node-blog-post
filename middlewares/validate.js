const Joi = require("joi");
const ApiError = require("../utils/ApiError");
const validate = (schema) => (req, res, next) => {
  if (!schema) {
    return res
      .status(500)
      .send({ error: true, message: "Validation schema is missing" });
  }

  //   const keys = ["params", "query", "body"];
  const keys = Object.keys(schema);
  const object = keys.reduce((obj, key) => {
    if (Object.prototype.hasOwnProperty.call(req, key)) {
      obj[key] = req[key];
    }
    return obj;
  }, {});

  console.log(object);

  const { value, error } = Joi.compile(schema).validate(object);
  if (error) {
    const errors = error.details
      .map((detail) => {
        return { key: detail.context.key, message: detail.message };
      })
      .join(",");
    next(new ApiError(400, errors));
  }
  return next();
};

module.exports = validate;
