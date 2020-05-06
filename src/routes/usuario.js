const express = require('express')
const router = express.Router()
const { store, adicionarAmigo } = require('../controller/userController')

router.post('/usuario', store)
router.post('/usuario/:usuario_id/:amigo_id', adicionarAmigo)

module.exports = router
