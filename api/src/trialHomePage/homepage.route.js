const express=require('express');
const { controllerHandler } = require('../../utils/controllerHandler');
const router=express.Router();
router.use(express.json());
const homepageController=require('./honepage.controller');
const authenticateToken=require('../../middleware/authenticateToken')


router.get('/',authenticateToken,controllerHandler(homepageController));


module.exports=router;