require('dotenv').config();
const express=require('express');
const jwt=require('jsonwebtoken');

module.exports=function authenticateToken(req,res,next){
    //console.log(req.headers);
    const authHeader=req.headers['authorization'];
    //console.log(authHeader);
    const token=authHeader&&authHeader.split(' ')[1];
    //console.log(token);
    if(token==null) return res.sendStatus(401);


    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(401);
        req.user=user;
        next();
    });
}