const express = require("express");
const router = express.Router();

const { ValidationsHelper, validationError } = require('../../helpers/validators/validator-put-news');

const newsControllers = require("../../controllers/newsControllers/putNews.controllers");

router.patch("/:id", ValidationsHelper, validationError, newsControllers.PUTNews);

module.exports = router;
