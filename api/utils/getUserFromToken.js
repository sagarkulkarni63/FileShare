const jwt=require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET}=require('../config/config');


function getUserFromToken(token){
    const userDataFromToken=jwt.verify(token,ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)return {status:"invalid"}
        else return {status:"success",data:user};
    })
    return userDataFromToken;
}

module.exports={getUserFromToken}