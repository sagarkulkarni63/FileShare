const {ACCESS_TOKEN_SECRET}=require('../../config/config');
const jwt=require('jsonwebtoken');
const {}=require('../../config/config');

function generateAccessToken(user){
    return jwt.sign(user,ACCESS_TOKEN_SECRET, {expiresIn:'10m'});
}


const refreshTokens = [];
const {REFRESH_TOKEN_SECRET}=require('../../config/config');

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: "12m",
  });
  refreshTokens.push(refreshToken);
  return refreshToken;
};

function verifyRefreshToken(oldRefreshToken){
    if(!refreshTokens.includes(oldRefreshToken)) return {status:"unsuccessful"};
    const verificationResult=jwt.verify(oldRefreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err)return {status:"unsuccessful"};
        const newTokens=generateAccessAndRefreshToken({name:user.name,uid:user.uid});
        return{status:"success",data:newTokens}
    });
    return verificationResult;
}




function generateAccessAndRefreshToken(user){
    return ({accessToken: generateAccessToken(user), refershToken: generateRefreshToken(user) });
}




// function authenticateToken(req,res,next){
//     //console.log(req.headers);
//     const authHeader=req.headers['authorization'];
//     //console.log(authHeader);
//     const token=authHeader&&authHeader.split(' ')[1];
//     //console.log(token);
//     if(token==null) return res.sendStatus(401);

    
//     jwt.verify(token,ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err) return res.sendStatus(401);
//         console.log(req.user)
//         console.log(user)
//         req.user=user;
//         next();
//     });
// }

module.exports={generateAccessToken,generateRefreshToken,generateAccessAndRefreshToken,verifyRefreshToken}
