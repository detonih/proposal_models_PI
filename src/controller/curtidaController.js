const { Curtida, Usuario, Post } = require('../models')

module.exports = {
  index: async (req, res) => {
    const curtidas = await Curtida.findAll()

    return res.json(curtidas)
  },

  store: async (req, res) => {
    const { post_id, usuario_id } = req.params

    const curtida = await Curtida.create({
      post_id,
      usuario_id
    })

    return res.json(curtida)
  },

  mostrarTodasCurtidasUsuario: async (req, res) => {
    const { usuario_id } = req.params

    const usuario = await Usuario.findByPk(usuario_id)

    const curtidas = await usuario.getCurtidas()

    return res.json(curtidas)

  },

  mostrarTodasCurtidasPost: async (req ,res) => {
    const { post_id } = req.params

    const post = await Post.findByPk(post_id)

    const curtidas = await post.getCurtidas()

    return res.json(curtidas)
  }

}