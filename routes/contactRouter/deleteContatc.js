const express = require("express");
const router = express.Router();

const deleteContactControllers = require("../../controllers/contactsControllers/deleteContactController");

router.delete("/:id", deleteContactControllers);

module.exports = router;
