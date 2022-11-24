const jwt=require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET}=require('../config/config');

function authenticateToken(req,res,next){
    //console.log(req.headers);
    const authHeader=req.headers['authorization'];
    //console.log(authHeader);
    const token=authHeader&&authHeader.split(' ')[1];
    //console.log(token);
    if(token==null) return res.sendStatus(401);

    
    jwt.verify(token,ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(401);
        console.log(req.user)
        console.log(user)
        req.user=user;
        next();
    });
}

module.exports=authenticateToken;