const { Comentario } =require('../models/Comentario')

module.exports = {
  index: async (req, res) => {

  },
  store: async () => {
    // body viria de um formulario
    // mas e o id do post?
    const { descricao } = req.body
  }
}