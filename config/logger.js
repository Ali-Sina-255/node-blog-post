const winston = require("winston");
const { format, createLogger } = winston;

const winstonFormat = winston.format.printf(
  (level, message, timestamp, stack) => {
    return `${timestamp}: ${level}: ${stack || message}`;
  }
);
const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), winstonFormat),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
