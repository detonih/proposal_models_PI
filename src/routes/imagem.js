const express = require('express')
const router = express.Router()
const { 
  index, 
  store,
 } = require('../controller/imagemController')

router.get('/imagem', index)

router.post('/imagem/:post_id', store)

module.exports = router