require("dotenv").config();
const Joi = require("joi");

// Validate environment variables
const envVarSchema = require("../validations/env.validations");

const { value: envVars, error } = envVarSchema.validate(process.env);
if (error) {
  // Log the validation error and exit
  console.error("Environment variable validation error:", error.details);
  process.exit(1); // Exit the process if validation fails
}

module.exports = {
  port: envVars.PORT,
  DB_URL: envVars.MONGO_URL, // Ensure consistency with your code
};
