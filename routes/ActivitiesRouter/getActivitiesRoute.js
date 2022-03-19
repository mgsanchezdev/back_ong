const express = require('express');
const router = express.Router();

const getActivities = require('../../controllers/ActivitiesControllers/getActivities');

router.get('/', getActivities);

module.exports = router;