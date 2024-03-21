const jwt = require("jsonwebtoken");
const secret = "this is secret";

const createToken = (data) => {
  return jwt.sign({ data }, secret);
};

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new Error("Invalid authorization header")
    }

    const token = authHeader.split(' ')[1]
    console.log(token)

    let user = jwt.verify(token, secret);
    console.log(user.data);
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ success: false, Error: err.message });
  }
};

module.exports = {
  createToken,
  authenticate,
};
