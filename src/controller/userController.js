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
  },
  adicionarAmigo: async (req, res) => {
    // pegar o id de quem esta logado na session. Aqui simulando pelo params
    // id do amigo pegar do botão, não sei como uaehauehaue
    const { usuario_id, amigo_id } = req.params

    const usuario = await Usuario.findByPk(usuario_id)

    const amigo = await Usuario.findByPk(amigo_id)

    await usuario.addAmigo(amigo)

    return res.json({usuario, amigo})
  },

  mostrarAmigos: async (req, res) => {
    // pega o id da session
    const { usuario_id } = req.params

    /* const todosAmigos = await Usuario.findAll({
      include: {model: Usuario, as: 'amigo'},
      through: {model: 'usuarios_amigos', where: {usuario_id}}
    }) */

   /*  const teste1 = await Usuario.findOne({
      where: { usuario_id },
      include: {
        model: Usuario,
        as: 'amigo'
      }
    }) */

    const teste2 = await Usuario.findByPk(usuario_id, {
      include: ['amigo']
    })

    const usuario = await Usuario.findByPk(usuario_id)
    console.log(usuario)
    const todosAmigos = await usuario.getAmigo() 

    return res.json({certo: todosAmigos, teste2: teste2})
  }
}