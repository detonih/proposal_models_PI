const { Comentario, Post, Usuario } =require('../models')

module.exports = {
  index: async (req, res) => {
    const comentarios = await Comentario.findAll()

    return res.json(comentarios)
  },
  store: async (req, res) => {
    // body viria de um formulario, id do user da session
    // mas e o id do post?
    const { post_id, usuario_id } = req.params
    const { descricao } = req.body
    console.log(post_id, usuario_id)
    const comentario = await Comentario.create({
      post_id,
      usuario_id,
      descricao
    }) 

    return res.json(comentario)
  },

  mostrarTodosComentariosDeUmPost: async (req, res) => {
    const { post_id } = req.params

    const post = await Post.findByPk(post_id)

    const comentarios = await post.getComentarios()

    return res.json(comentarios)
  },

  mostrarTodosComentariosDeUmUsuario: async (req, res) => {
    const { usuario_id } = req.params

    const usuario = await Usuario.findByPk(usuario_id)

    const comentarios = await usuario.getComentarios()

    return res.json(comentarios)
  }
}