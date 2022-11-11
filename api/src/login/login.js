const express=require('express');
const getQuery = require('../../models/query/getQuery');
const router=express.Router();
const generateAccessToken=require('../authorization/generateAccessToken');
//const loginQuery = require('../../../models/query/loginQuery');
let refreshTokens=[];
router.use(express.json());
const loginController=require('./login.controller');


router.post('/',loginController);






module.exports=router;