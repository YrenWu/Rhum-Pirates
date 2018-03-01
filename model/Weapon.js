var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pj_mongoose');

var db = mongoose.connection;

  // Create a mongo schema
  var weaponSchema = mongoose.Schema({
	name: String,
	damage: Number, 
  });

module.exports = weaponSchema;