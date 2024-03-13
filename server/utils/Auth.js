const config = require("../config/server");
const { sign, verify } = require("jsonwebtoken");

module.exports.createAccessToken = (id) => {
  return sign({ id }, config.accessTokenSecret, {
    expiresIn: "15m",
  });
};

module.exports.createRefreshToken = (id) => {
  return sign({ id }, config.refreshTokenSecret, {
    expiresIn: "30d",
  });
};

module.exports.verifyRefreshToken = (refreshToken) => {
  try {
    const decoded = verify(refreshToken, config.refreshTokenSecret);
    return decoded.id;
  } catch (error) {
    return null;
  }
};
