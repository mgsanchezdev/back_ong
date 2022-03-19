const express = require("express");
const router = express.Router();

const deleteCategory = require('../../controllers/categoryControllers/deleteCategory.controllers');

router.delete('/:id', deleteCategory);

module.exports = router;