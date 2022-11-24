const multer = require("multer");
const express = require("express");
const upload = multer({ dest: "uploads" });
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const uploadModels = require("./upload.models");
const uploadService = require("./upload.service");
const getUserFromT=require('../../utils/getUserFromToken');
const getUserFromToken=getUserFromT.getUserFromToken;
function uploadPostController(req, res) {
  const password = req.body.password;
  const path = req.file.path;
  const originalName = req.file.originalname;
  const fileId = uuidv4();
  const authHeader=req.headers['authorization']
  const token=authHeader&&authHeader.split(' ')[1]
  if(!token) return res.sendStatus(401);
  const loggedInUser=getUserFromToken(token);
  const uid=loggedInUser.data.uid;
  const fileLink = uploadService.fileLink(fileId);
  const response = uploadService.updatelink(
    originalName,
    path,
    password,
    fileId,
    fileLink,
    uid,
  );
  response.then(result => {
    if (result.status == "success") {
      res.render("index", { fileLink: `${fileLink}` });
    } else {
      res.send("could not upload");
    }
  });
}

function uploadGetController(req, res) {
  const authHeader=req.headers['authorization']
  const token=authHeader&&authHeader.split(' ')[1]
  if(!token) return res.sendStatus(401);
  const loggedInUser=getUserFromToken(token);
  //console.log(typeof(loggedInUser))
  console.log(loggedInUser.data.uid)
  res.render("index",{loggedInUser:`${loggedInUser}`});
}
module.exports = { uploadPostController, uploadGetController };
