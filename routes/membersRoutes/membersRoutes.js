const { postMembersController } = require('../../controllers/membersControllers/postMembersController')
const express = require('express')
const router = express.Router()
const { membersValidator } = require('../../helpers/validators/validatorMembers')
const { awsSDK } = require('../../helpers/services/aws-s3')

router.post('/', awsSDK, membersValidator, postMembersController)

module.exports = router