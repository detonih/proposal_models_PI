module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
    })
    return Post
}