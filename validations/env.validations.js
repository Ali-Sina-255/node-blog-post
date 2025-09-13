const Joi = require("joi");
// Validate environment variables
const envVarSchema = Joi.object({
  MONGO_URL: Joi.string().uri().required(), // Ensure this is a valid URL
  PORT: Joi.number().positive().default(3000),
}).unknown();
module.exports = envVarSchema;
