const express=require('express');
const router=express.Router();
const {v4:uuidv4}=require('uuid');
const signupController = require('./signup.controller');
const { controllerHandler } = require('../../utils/controllerHandler');

router.use(express.json());

router.post('/',controllerHandler(signupController));

module.exports=router;