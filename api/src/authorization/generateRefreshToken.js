const jwt = require("jsonwebtoken");
const refreshTokens = [];
const {REFRESH_TOKEN_SECRET}=require('../../config/config');
module.exports = function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: "12m",
  });


  refreshTokens.push(refreshToken);
  return refreshToken;
};
