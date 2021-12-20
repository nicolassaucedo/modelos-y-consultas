module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    active: {
        type:dataTypes.BOOLEAN,
        defaultValue:1,
        allowNull:false
    },
  };

  let config = {
      underscored: true,
      tableName:"genres"
  };

  const Genre = sequelize.define(alias, cols, config);

  return Genre
};
