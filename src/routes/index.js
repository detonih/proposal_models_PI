const express = require('express')
const router = express.Router()
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')
const comentarioRoutes = require('./comentario')
const curtidaRoutes = require('./curtida')
const imagemRoutes = require('./imagem')

router.use(usuarioRoutes)
router.use(postRoutes)
router.use(comentarioRoutes)
router.use(curtidaRoutes)
router.use(imagemRoutes)

module.exports = router