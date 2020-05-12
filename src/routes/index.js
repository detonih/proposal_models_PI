const express = require('express')
const router = express.Router()
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')
const comentarioRoutes = require('./comentario')

router.use(usuarioRoutes)
router.use(postRoutes)
router.use(comentarioRoutes)

module.exports = router