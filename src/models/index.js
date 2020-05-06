const config = require('../configs/database')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(config)

const Usuario = require('./Usuario')(sequelize, DataTypes)
const Post = require('./Post')(sequelize, DataTypes)
const Comentario = require('./Comentario')(sequelize, DataTypes)
const Curtida = require('./Curtida')(sequelize, DataTypes)
const Imagem = require('./Imagem')(sequelize, DataTypes)
const Amigo = require('./Amigos')(sequelize, DataTypes)

Usuario.hasMany(Post, { foreignKey: 'usuario_id' })
Post.belongsTo(Usuario, { foreignKey: 'usuario_id'})

Post.hasMany(Comentario)
Comentario.belongsTo(Post)

Post.hasMany(Curtida)
Curtida.belongsTo(Post)

Post.hasMany(Imagem)
Imagem.belongsTo(Post)

Usuario.belongsToMany(Usuario, { foreignKey: 'id', through: 'usuarios_amigos', as: 'amigos'})

module.exports = {
  sequelize,
  Usuario,
  Post,
  Comentario,
  Curtida,
  Imagem,
  Amigo
}