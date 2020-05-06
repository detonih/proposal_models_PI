const { Usuario, Post } = require('../models')

module.exports = {
  index: async (req, res) => {

  },

  store: async (req, res) => {
    const { usuario_id } = req.params
    const { titulo, descricao } = req.body

    const user = await Usuario.findByPk(usuario_id)
    
    if(!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const post = await Post.create({
      usuario_id,
      titulo,
      descricao
    })

    return res.json(post)
  }
}