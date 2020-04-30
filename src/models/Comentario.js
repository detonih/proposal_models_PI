module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true
      })
    return Comentario
}