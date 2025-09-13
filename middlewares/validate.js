const Joi = require("joi");

const validate = (schemas) => (req, res, next) => {
  if (!schemas) {
    return res
      .status(500)
      .send({ error: true, message: "Validation schemas are missing" });
  }

  // If schemas for specific request parts (params, query, body) are provided, validate them
  const validationResults = [];

  // Validate params if schema is provided
  if (schemas.params && req.params) {
    const { error } = Joi.compile(schemas.params).validate(req.params);
    if (error) {
      validationResults.push({
        part: "params",
        errors: error.details.map((detail) => ({
          key: detail.context.key,
          message: detail.message,
        })),
      });
    }
  }

  // Validate query if schema is provided
  if (schemas.query && req.query) {
    const { error } = Joi.compile(schemas.query).validate(req.query);
    if (error) {
      validationResults.push({
        part: "query",
        errors: error.details.map((detail) => ({
          key: detail.context.key,
          message: detail.message,
        })),
      });
    }
  }

  // Validate body if schema is provided
  if (schemas.body && req.body) {
    const { error } = Joi.compile(schemas.body).validate(req.body);
    if (error) {
      validationResults.push({
        part: "body",
        errors: error.details.map((detail) => ({
          key: detail.context.key,
          message: detail.message,
        })),
      });
    }
  }

  // If any validation results exist, return errors
  if (validationResults.length > 0) {
    return res.status(400).send({
      error: true,
      validationResults,
    });
  }

  // If no errors, proceed to the next middleware or route handler
  return next();
};

module.exports = validate;
