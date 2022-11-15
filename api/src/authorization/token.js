const express=require('express');
const router=express.Router();
const tokenService=require('./tokenService');
const verifyRefreshToken=tokenService.verifyRefreshToken
router.use(express.json())
const tokenController=require('./token.controller');
const { controllerHandler } = require('../../utils/controllerHandler');

router.post('/',controllerHandler(tokenController));

module.exports=router;