const JWT = require("jsonwebtoken");

const SECRET = "$MasirNodeLearning1965";

function createTokensForUsers(user) {
  const payload = {
    _id: user._id,
    name: user.fullName,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };

  const token = JWT.sign(payload, SECRET);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, SECRET);
  return payload;
}

module.exports = { createTokensForUsers, validateToken };
