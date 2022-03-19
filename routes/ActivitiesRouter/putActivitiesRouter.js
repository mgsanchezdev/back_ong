const express = require("express");
const router = express.Router();

const activitiesControllers = require("../../controllers/ActivitiesControllers/PutActivities");

//const Auth = require("../../helpers/middlewareAdmin");

router.patch("/:id", activitiesControllers.PutActivities);

module.exports = router;