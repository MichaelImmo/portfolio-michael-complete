const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const config = require("../config");
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: "https://dev-abdz9pf3.auth0.com/.well-known/jwks.json"
  }),
  audience: "BcsMUAywbOFA6nP8TK2PVihD20WuMd62",
  issuer: "https://dev-abdz9pf3.auth0.com/",
  algorithms: ["RS256"]
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + "/role"] && user[NAMESPACE + "/role"] === role) {
    next();
  } else {
    return res
      .status(401)
      .send({
        title: "Not Authorized",
        detail: "You are not authorized to access this data"
      });
  }
};
