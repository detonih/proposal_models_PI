const config = require('../configs/database')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(config)

const Usuario = require('./Usuario')(sequelize, DataTypes)
const Post = require('./Post')(sequelize, DataTypes)
const Comentario = require('./Comentario')(sequelize, DataTypes)
const Curtida = require('./Curtida')(sequelize, DataTypes)
const Imagem = require('./Imagem')(sequelize, DataTypes)

Usuario.hasMany(Post , { foreignKey: 'usuario_id' })
Post.belongsTo(Usuario)

Usuario.belongsToMany(Usuario, { as: 'amigo', through: 'usuarios_amigos' })

Usuario.hasMany(Comentario, { foreignKey: 'usuario_id' })
Comentario.belongsTo(Usuario)

Usuario.hasMany(Curtida, { foreignKey: 'usuario_id' })
Curtida.belongsTo(Usuario)

Post.hasMany(Comentario, { foreignKey: 'post_id' })
Comentario.belongsTo(Post)

Post.hasMany(Curtida, { foreignKey: 'post_id' })
Curtida.belongsTo(Post)

Post.hasMany(Imagem, { foreignKey: 'post_id' })
Imagem.belongsTo(Post)


module.exports = {
  sequelize,
  Usuario,
  Post,
  Comentario,
  Curtida,
  Imagem,
}