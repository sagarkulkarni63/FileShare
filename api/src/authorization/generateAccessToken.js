const jwt=require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET}=require('../../config/config');
module.exports=function generateAccessToken(user){
    return jwt.sign(user,ACCESS_TOKEN_SECRET, {expiresIn:'10m'});
}