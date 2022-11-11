 
const express=require('express');
const router=express.Router();
router.use(express.json());
const verifyAccessToken = require('../authorization/verifyAccessToken.js');
router.use(express.urlencoded({extended:true}))
router.use(express.json());
handleDownload=require('./download.controller');

router.get("/:id",handleDownload.handleDownloadGet)

router.post("/:id",handleDownload.handleDownloadPost);

module.exports=router;

  

