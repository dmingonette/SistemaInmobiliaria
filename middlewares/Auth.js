const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("authorization");
  try {
    console.log(token);
    const user = jwt.verify(token, process.env.CLAVESECRETA);
    console.log(user);
    next();
  } catch (error) {
    res.status(401).send({ err: error.message});
  }
}

module.exports = auth;
