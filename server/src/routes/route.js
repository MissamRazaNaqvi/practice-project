const express = require("express");
const multer = require("multer");
const controller = require("../controllers/controller");
const route = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

route.get("/", controller.initial);
route.post(
  "/api/student",
  upload.fields([{ name: "image" }, { name: "file" }]),
  controller.studentdata
);

module.exports = route;
