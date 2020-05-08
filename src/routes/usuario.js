const express = require('express')
const router = express.Router()
const { index, mostrarAmigos, store, adicionarAmigo } = require('../controller/userController')

router.get('/usuario', index)
router.get('/usuario/:usuario_id/amigos', mostrarAmigos)

router.post('/usuario', store)
router.post('/usuario/:usuario_id/:amigo_id', adicionarAmigo)

module.exports = router
