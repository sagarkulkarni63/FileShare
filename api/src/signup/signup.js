const express=require('express');
const router=express.Router();
const {v4:uuidv4}=require('uuid');
const signupController = require('./signup.controller');

router.use(express.json());

router.post('/',signupController);

module.exports=router;