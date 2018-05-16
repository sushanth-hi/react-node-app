'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    task: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    models.Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Task;
};