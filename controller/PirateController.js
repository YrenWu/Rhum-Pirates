const mongoose = require('mongoose');
const pirateSchema = require('../model/Pirate')
const Pirate = mongoose.model('Pirate', pirateSchema);

mongoose.connect('mongodb://localhost/pj_mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

class PirateController {
  findAll() {
    Pirate.find({}, {_id: false, name: true}, (err, pirates) => {
	  if (err) return console.error(err);
	  console.log(pirates);
	})
  };

  findByName() {
    Pirate.find({name: 'Rackham'}, {_id: false, name: true}, (err, pirates) => {
	  if (err) return console.error(err);
	  console.log(pirates);
	})
  };	
}

module.exports = PirateController;
