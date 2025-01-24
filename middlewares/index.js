const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename, // Use the passed filename
      `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
      (err) => {
        if (err) {
          console.error("Error writing to log file:", err);
        }
        next(); // Proceed to the next middleware
      }
    );
  };
}

module.exports = {
    logReqRes
}; // Export the function if needed in other files
