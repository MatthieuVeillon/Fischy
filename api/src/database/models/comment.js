module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      postId: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    { tableName: "Comments" }
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
      as: "author",
    });
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
      as: "post",
    });
  };
  return Comment;
};
