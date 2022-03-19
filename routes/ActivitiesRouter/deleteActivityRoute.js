const express = require("express");
const router = express.Router();

const deleteActivity = require('../../controllers/ActivitiesControllers/deleteActivities');

router.delete('/:id', deleteActivity);

module.exports = router;