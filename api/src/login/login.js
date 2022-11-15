const express=require('express');
const getQuery = require('../../models/query/getQuery');
const router=express.Router();
//const generateAccessToken=require('../authorization/generateAccessToken');
//const loginQuery = require('../../../models/query/loginQuery');
router.use(express.json());
const loginController=require('./login.controller');
//const {controllerHandler}=require('../../utils/controllerHandler');
const { controllerHandler } = require('../../utils/controllerHandler');


router.post('/',controllerHandler(loginController));






module.exports=router;