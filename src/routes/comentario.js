const express = require('express')
const router = express.Router()
const { 
  index,
  store, 
  mostrarTodosComentariosDeUmUsuario,
  mostrarTodosComentariosDeUmPost
} = require('../controller/comentarioController')

router.get('/comentario', index)
router.get('/comentario/post/:post_id', mostrarTodosComentariosDeUmPost)
router.get('/comentario/usuario/:usuario_id', mostrarTodosComentariosDeUmUsuario)

router.post('/comentario/:post_id/:usuario_id', store)

module.exports = router