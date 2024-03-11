const { verifyAccessToken } = require("../utils/Auth");

module.exports.authenticateUser = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const userId = verifyAccessToken(accessToken);
  if (!userId) {
    return res.status(401).json({ message: "Invalid access token" });
  }
  req.userId = userId;
  next();
};
