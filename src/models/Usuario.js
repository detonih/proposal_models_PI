module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password cannot be null' }
      }
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Password cannot be null' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Password cannot be null' }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password cannot be null' }
      }
    },
    foto_perfil: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: ' cannot be null' }
      }
    },
    biografia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: ' cannot be null' }
      }
    }
  })
  return Usuario
}