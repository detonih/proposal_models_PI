module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define('Favorito', {
        usuario_favorito: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true
    })
    return Favorito
}