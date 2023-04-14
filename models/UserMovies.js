const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our UserMovies model
class UserMovies extends Model {}

// create fields/columns for UserMovies model
UserMovies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        }
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "movie",
            key: "id",
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usermovie'
  }
);

module.exports = UserMovies;
