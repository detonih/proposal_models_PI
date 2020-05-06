module.exports = (sequelize, DataTypes) => {
  const Amigo = sequelize.define('Amigo', {
    usuario_id: DataTypes.STRING,
    amigo_id: DataTypes.STRING,
    situacao: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['pendente', 'aprovado', 'rejeitado'],
      defaultValue: 'pendente',
      field: 'situacao'
    }
  })
  return Amigo
}