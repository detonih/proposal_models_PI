const express = require('express')
const router = express.Router()
const { 
  index, 
  store,
  mostrarTodasCurtidasUsuario, 
  mostrarTodasCurtidasPost 
} = require('../controller/curtidaController')

router.get('/curtida', index)
router.get('/curtida/usuario/:usuario_id', mostrarTodasCurtidasUsuario)
router.get('/curtida/post/:post_id', mostrarTodasCurtidasPost)

router.post('/curtida/:post_id/:usuario_id', store)

module.exports = router