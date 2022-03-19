const express = require("express");
const router = express.Router()
const newsControllers = require('../../controllers/newsControllers/POSTNews.controllers');
const { getTokenInfo } = require('../../helpers/userToken/decryptTokenHelpers')
const { awsSDK } = require('../../helpers/services/aws-s3')

router.post('/', awsSDK,/* getTokenInfo, */ newsControllers.POSTNews)

module.exports = router