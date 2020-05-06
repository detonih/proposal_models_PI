const express = require('express')
const router = express.Router()
const { getAllPostsByUser, store } = require('../controller/postController')

router.get('/usuario/:usuario_id/post', getAllPostsByUser)
router.post('/usuario/:usuario_id/post', store)

module.exports = router
