module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define('Imagem', {
        caminho: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Imagem
}