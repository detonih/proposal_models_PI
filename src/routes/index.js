const express = require('express')
const router = express.Router()
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')

router.use(usuarioRoutes)
router.use(postRoutes)

module.exports = router