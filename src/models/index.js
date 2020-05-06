const config = require('../configs/database')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(config)

const Usuario = require('./Usuario')(sequelize, DataTypes)
const Post = require('./Post')(sequelize, DataTypes)
const Comentario = require('./Comentario')(sequelize, DataTypes)
const Curtida = require('./Curtida')(sequelize, DataTypes)
const Imagem = require('./Imagem')(sequelize, DataTypes)
const Favorito = require('./Favorito')(sequelize, DataTypes)

Usuario.hasMany(Post, { foreignKey: 'usuario_id' })
Post.belongsTo(Usuario, { foreignKey: 'user_id'})

Post.hasMany(Comentario)
Comentario.belongsTo(Post)

Post.hasMany(Curtida)
Curtida.belongsTo(Post)

Post.hasMany(Imagem)
Imagem.belongsTo(Post)

Usuario.hasMany(Favorito)
Favorito.belongsTo(Usuario)


module.exports = {
  sequelize,
  Usuario,
  Post,
  Comentario,
  Curtida,
  Imagem,
  Favorito
}