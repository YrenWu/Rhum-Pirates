var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pj_mongoose');

var db = mongoose.connection;

  // Create a mongo schema
  var pirateSchema = mongoose.Schema({
	name: String, 
	birth: Date,
	weapon: String,
  });

   pirateSchema.methods.speak = function () {
	   var greeting = this.name
	     ? "Ahoi, I'm " + this.name
	     : "";
	     console.log(greeting);
   }
  
module.exports = pirateSchema;