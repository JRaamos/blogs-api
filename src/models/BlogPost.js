module.exports = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      fild: 'user_id',
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });
  Blogpost.associate = (models) => {
    Blogpost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return Blogpost;
}