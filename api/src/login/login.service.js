const loginModel = require("./login.model");
const generateAccessAndRefreshToken = require("../authorization/generateAccessAndRefreshToken");

async function login(emailId, password) {
  const user = await getUser(emailId, password);
  console.log(user);
  if (!user.rows.length) {
    return { status: "failure", msg: "INVALID USERNAME AND PASSWORD" };
  }
  const object = user.rows[0];
  console.log(object);
  var name = object.name;
  var uid = object.uid;
  const LoggedInuser = { name: name, uid: uid };
  return {
    status: "success",
    data:  generateAccessAndRefreshToken(LoggedInuser),
  };
}

async function getUser(emailId, password) {
  return loginModel(emailId, password);
}

module.exports = { login, getUser };

// const accessToken = generateAccessToken(user);
// const refreshToken=generateRefreshToken(user);
//res.json({ accessToken: accessToken, refreshToken: refreshToken });
//res.send(`Welcome: ${name} with userID${uid}`);
