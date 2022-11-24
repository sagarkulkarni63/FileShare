const {v4:uuidv4}=require('uuid');
const dbUsingSequelize=require('./signup.service')
const signUpUser=require('./signup.service')

module.exports=function signUpController(req,res){
    const newId=uuidv4();
    const user=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const response=signUpUser(newId,user,email,password);
    response.then(result=> {if(result.status=="Exist"){
        res.send("User Already Exist")
        
    }
    else{
        res.send("success")
    }
}).catch(console.log("error in response of signup"))
}