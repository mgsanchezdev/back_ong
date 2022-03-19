const express = require('express');
const router = express.Router();

const contactPut = require ('../../controllers/contactsControllers/putContactController');

router.patch('/:id', contactPut);

module.exports = router;
