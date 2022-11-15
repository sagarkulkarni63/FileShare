const loginService = require("./login.service");

module.exports = async function userLogin(req, res) {
  throw new Error("In login error")
  const emailId = req.body.email;
  const password = req.body.password;
  if(!emailId || !password){
    res.status(400).send("MISSING VALUES");
  }
  const response = await loginService.login(emailId, password);
  if (response.status === "success") {
    res.json(response.data);
  } else {
    res.status(400).send(response.msg);
  }
};
