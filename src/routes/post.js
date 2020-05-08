const express = require('express')
const router = express.Router()
const { getAllPostsByUser, store } = require('../controller/postController')

router.get('/posts/:usuario_id', getAllPostsByUser)
router.post('/posts/:usuario_id', store)

module.exports = router
