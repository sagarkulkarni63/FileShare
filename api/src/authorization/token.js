const express=require('express');
const router=express.Router();
const tokenService=require('./tokenService');
const verifyRefreshToken=tokenService.verifyRefreshToken
router.use(express.json())
const tokenController=require('./token.controller');

router.post('/',tokenController);

module.exports=router;