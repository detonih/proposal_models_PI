const { Usuario, Amigo } = require('../models')

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
  },
  adicionarAmigo: async (req, res) => {
    // pegar o id de quem esta logado na session. Aqui simulando pelo params
    // id do amigo pegar do botão, não sei como uaehauehaue
    const { usuario_id, amigo_id } = req.params
    console.log(usuario_id, amigo_id)
    const user = await Usuario.findByPk(usuario_id)

    if(!user) {
      return res.status(400).json({ error: 'User not found' })
    }
    console.log(amigo_id)
    const amigo = await Amigo.create({
      usuario_id,
      amigo_id
    })

    return res.json(amigo)
  }
}