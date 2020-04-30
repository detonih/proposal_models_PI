module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
        caminho: {
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