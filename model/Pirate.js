var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pj_mongoose');

var db = mongoose.connection;

  // Create a mongo schema
  var pirateSchema = mongoose.Schema({
	lastname: String, 
	firstname: String,
	birth: Date,
	weight: Number,
  });

module.exports = pirateSchema;