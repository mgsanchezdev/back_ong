const express = require('express');
const router = express.Router();

const userPut = require ('../../controllers/userControllers/userPutController');

router.patch('/:id', userPut);

module.exports = router;
