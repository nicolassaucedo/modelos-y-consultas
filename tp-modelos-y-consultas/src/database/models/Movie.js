module.exports = (sequelize, dataTypes) => {
  let alias = "Movie";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER.UNSIGNED,
    },
    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    rating: {
      type: dataTypes.DECIMAL(3, 1).UNSIGNED,
      allowNull: false,
    },
    awards: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    length: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    genre_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };

  let config = {
    underscored: true,
    timestamps: false,
    tableName: "movies",
  };

  const Movie = sequelize.define(alias, cols, config);

  return Movie;
};
