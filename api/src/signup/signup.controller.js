const {v4:uuidv4}=require('uuid');
const signUpUser=require('./signup.service')

module.exports=function signUpController(req,res){
    const newId=uuidv4();
    const user=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    signUpUser(newId,user,email,password);
    res.send("Success");
}