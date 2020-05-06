const express = require('express')
const router = express.Router()
const { store } = require('../controller/userController')

router.post('/usuario', store)

module.exports = router
