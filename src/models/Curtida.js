module.exports = (sequelize, DataTypes) => {
    const Curtida = sequelize.define('Curtida', {},
    {
        timestamps: true,
        paranoid: true
    })
    return Curtida
}