var mongoose = require('mongoose');

var FilmSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  description: String,
  link: String
});

module.exports = mongoose.model('Film', FilmSchema);