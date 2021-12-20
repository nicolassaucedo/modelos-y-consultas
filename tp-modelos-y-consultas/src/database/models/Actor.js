module.exports = (sequelize, dataTypes) => {
  let alias = "Actor";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: dataTypes.DECIMAL.UNSIGNED,
      allowNull: false,
    },
    favorite_movie_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    underscored: true,
    tableName: "actors",
  };

  const Actor = sequelize.define(alias, cols, config);

  return Actor;
};
