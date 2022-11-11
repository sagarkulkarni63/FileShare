const signupModels = require("./signup.models")

module.exports=function signUpUser(newId,user,email,password){
    signupModels(newId,user,email,password);
}