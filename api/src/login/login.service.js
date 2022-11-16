const loginModel = require("./login.model");
const tokenService= require('../authorization/tokenService');
const generateAccessAndRefreshToken=tokenService.generateAccessAndRefreshToken;

async function login(emailId, password) {
  const user = await getUser(emailId, password);
  //console.log(user);
  if (!user) {
    return { status: "failure", msg: "INVALID USERNAME AND PASSWORD" };
  }
  const object = user.dataValues;
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
