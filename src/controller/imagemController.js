const { Imagem } = require('../models')

module.exports = {
  index: async (req, res) => {
    const imagens = await Imagem.findAll()

    res.json(imagens)
  },

  store: async (req, res) => {
    const { post_id } = req.params
    const { caminho } = req.body

    const imagem = await Imagem.create({
      caminho,
      post_id
    })

    return res.json(imagem)
  }
}