const signupModels = require("./signup.models")
const {users}=require('../../models/sequelize.model');


module.exports=async function signUpUser(newId,user,email,password){
    const emailExists = await users.findOne({ where: { email: email } });
if (emailExists ) {
    return {status:"Exist"}
  //res.json("Email already registered")
}
else{
    await signupModels(newId,user,email,password);
    return {status:"success"}
}
}