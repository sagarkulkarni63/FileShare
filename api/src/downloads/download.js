 
const express=require('express');
const router=express.Router();
router.use(express.json());
const tokenService=require('../authorization/tokenService');
const verifyAccessToken=tokenService.authenticateToken;
//const verifyAccessToken = require('../authorization/tokenService');
router.use(express.urlencoded({extended:true}))
router.use(express.json());
handleDownload=require('./download.controller');
const { controllerHandler } = require('../../utils/controllerHandler');

router.get("/:id",controllerHandler(handleDownload.handleDownloadGet))

router.post("/:id",verifyAccessToken,controllerHandler(handleDownload.handleDownloadPost));

module.exports=router;

  

