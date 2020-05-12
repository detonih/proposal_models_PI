const express = require('express')
const router = express.Router()
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')
const comentarioRoutes = require('./comentario')
const curtidaRoutes = require('./curtida')

router.use(usuarioRoutes)
router.use(postRoutes)
router.use(comentarioRoutes)
router.use(curtidaRoutes)

module.exports = router