const { sing, verify } = require("jsonwebtoken");
const { app } = require("./config");

const createToken = (payload) =>
  sing(payload, app.secret, { expiresIn: "8760h" });

const verifyToken = (token) => verify(token, app.secret);

module.exports = { createToken, verifyToken };
