module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define('Imagem', {
        caminho: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true
      })
    return Imagem
}