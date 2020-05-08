module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('comentarios', {
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Comentario
}