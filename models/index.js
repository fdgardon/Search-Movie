const User = require('./User');
const Movie = require('./Movie');
const UserMovies = require("./UserMovies");

User.belongsToMany(Movie, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserMovies,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'favorite_movies'
  });
  
  Movie.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserMovies,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'users_favorited'
  });

module.exports = { User, Movie, UserMovies };