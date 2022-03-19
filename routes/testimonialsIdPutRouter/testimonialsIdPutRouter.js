const express = require("express");
const router = express.Router();

const testimonialsIdPutController = require("../../controllers/testimonialsControlles/testimonialsIdPutController");

router.patch("/:id", /*middlewareAdmin*/testimonialsIdPutController);

module.exports = router;
