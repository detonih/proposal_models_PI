const express = require('express')
const router = express.Router()
const { store } = require('../controller/postController')

router.post('/usuario/:usuario_id/post', store)

module.exports = router
