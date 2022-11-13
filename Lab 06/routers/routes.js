const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const multer = require("multer")
const path = require("path");

router.get("/", imageController.getImage);
router.get("/slideshow", imageController.getSlideShow);
router.post("/uploadProfilePicture", imageController.postImage);

module.exports = router;