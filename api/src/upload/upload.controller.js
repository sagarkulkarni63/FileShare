const multer = require("multer");
const express = require("express");
const upload = multer({ dest: "uploads" });
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const uploadModels = require("./upload.models");
const uploadService = require("./upload.service");

function uploadPostController(req, res) {
  const password = req.body.password;
  const path = req.file.path;
  const originalName = req.file.originalname;
  const fileId = uuidv4();
  const fileLink = uploadService.fileLink(fileId);
  const response = uploadService.updatelink(
    originalName,
    path,
    password,
    fileId,
    fileLink
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
  res.render("index");
}
module.exports = { uploadPostController, uploadGetController };
