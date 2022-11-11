const jwt=require('jsonwebtoken');
const generateAccessToken=require('./generateAccessToken');
const generateRefreshToken=require('./generateRefreshToken');

module.exports=function generateAccessAndRefreshToken(user){
    return ({accessToken: generateAccessToken(user), refershToken: generateRefreshToken(user) });
}