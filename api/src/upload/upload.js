const multer = require("multer");
const express = require("express");
const upload = multer({ dest: "uploads" });
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const uploadQuery = require("../../models/query/uploadQuery.js");
const verifyAccessToken = require("../authorization/verifyAccessToken");
const uploadController = require("./upload.controller");

router.get("/", uploadController.uploadGetController);

router.post("/",upload.single("file"), uploadController.uploadPostController);

module.exports = router;

// if (req.body.password != null && req.body.password !== "") {
//   const password = await bcrypt.hash(req.body.password, 10)
// }

// const text='INSERT INTO files(fname,path,password,fileid) VALUES($1,$2,$3,$4)';
// const values=[originalName,path,password,fileId];
// client.query(text,values,(err,res)=>{
//     if(err){
//         console.log(err.stack);
//     }
//     else{
//         console.log("success");
//         console.log(res.rows);
//     }
// });

// // router.set('view engine',path.join(__dirname,'/views'));
// // router.set('view engine','ejs');
