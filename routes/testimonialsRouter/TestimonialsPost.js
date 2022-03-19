const express = require('express');
const router = express.Router();
const TestimonyValidator = require('../../helpers/testimonials/TestimonyValidator');
const TestimonialsPostController = require('../../controllers/testimonialsControllers/TestimonialsPostController')
const { awsSDK } = require('../../helpers/services/aws-s3')

router.post('/', TestimonyValidator.PostValidator, awsSDK, TestimonialsPostController);

module.exports = router;    