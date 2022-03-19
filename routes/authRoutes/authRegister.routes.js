var express = require('express');
var router = express.Router();

const { register } = require('../../controllers/userControllers/userRegister');

const { ValidationsHelper, validation } = require('../../helpers/validators/validator-register');

router.post('/register', ValidationsHelper, validation, register);

module.exports = router;
