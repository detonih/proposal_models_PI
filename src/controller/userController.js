const { Usuario } = require('../models')

module.exports = {
  index: async (req, res) => {
    const usuarios = await Usuario.findAll()

    return res.json(usuarios)
  },
  store: async (req, res) => {
    const { nome, nickname, email, senha, foto_perfil, biografia } = req.body

    const usuario = await Usuario.create({
      nome,
      nickname,
      email,
      senha, 
      foto_perfil,
      biografia
    })

    return res.json(usuario)
  }
}