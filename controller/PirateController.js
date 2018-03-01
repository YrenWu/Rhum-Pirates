const mongoose = require('mongoose');
const pirateSchema = require('../model/Pirate')
const Pirate = mongoose.model('Pirate', pirateSchema);

mongoose.connect('mongodb://localhost/pj_mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

class PirateController {

  findAll() {
    Pirate.find({}, {_id: false, lastname: true, firstname: true, weapon: true}, (err, pirates) => {
	  if (err) return console.error(err);
	  console.log(pirates);
	})
  };

  findByName(name) {
  	var regEx = new RegExp('^'+name,'i');

    Pirate.find({lastname: regEx}, {_id: false, lastname: true, firstname: true, weapon: true}, (err, pirates) => {
	  if (err) return console.error(err);
	  console.log(pirates);
	})
  };

  enrolment() {
  	let pirate = new Pirate({firstname : 'Ann', lastname: 'Bonny', weapon: 'Saber' });
  	pirate.save(function (err, pirate) {
	    if (err) return console.error(err);
	    pirate.speak();
	 })
  };

  kill(name) {
  	var regEx = new RegExp('^'+name,'i');

	Pirate.findOneAndRemove({lastname: regEx}, (err, pirate) => {
	  if (err) return console.error(err);
	  console.log(pirate);
	});
  }

  evolve() {
  	Pirate.update({ _id: '5a97daf83c0f432c610fba4c' }, { $set: { lastname: 'Bonny', firstname: 'Ann' }}, (err, pirate) => {
	  if (err) return console.error(err);
	  console.log(pirate);
	});
  }
}

module.exports = PirateController;
