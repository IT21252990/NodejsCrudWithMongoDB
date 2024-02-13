//imports
const jwt = require("jsonwebtoken");

//middleware for authentication
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "verySecretValue");

    req.manager = decoded;
    next();
  } catch (err) {
    res.json({
      message: "Authentication failed !",
    });
  }
};

//export
module.exports = authenticate
