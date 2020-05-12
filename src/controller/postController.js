const { Usuario, Post } = require('../models')

module.exports = {
  getAllPostsByUser: async (req, res) => {
    const { usuario_id } = req.params

    const user = await Usuario.findByPk(usuario_id)

    if(!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const posts = await Post.findAll({
      where: { usuario_id },
      include: Usuario 
    })

    return res.json(posts)
  },

  store: async (req, res) => {
    const { usuario_id } = req.params
    const { titulo, descricao } = req.body

    const user = await Usuario.findByPk(usuario_id)

    if(!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    /* const post = await user.addPosts([{
      usuario_id,
      titulo,
      descricao
    }]) */ // ta dando update

    //const hasPost = await user.countPosts() //funciona

    const post = await Post.create({
      usuario_id,
      titulo,
      descricao
    }) 

    return res.json(post)
  }
}