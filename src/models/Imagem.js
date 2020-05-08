module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define('imagens', {
        caminho: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Imagem
}