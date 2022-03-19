const express = require("express");
const router = express.Router()
const activitiesControllers = require('../../controllers/ActivitiesControllers/PostActivities');
const { awsSDK } = require('../../helpers/services/aws-s3')

router.post('/', awsSDK, activitiesControllers.PostActivities)

module.exports = router