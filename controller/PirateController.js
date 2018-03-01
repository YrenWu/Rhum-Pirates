const mongoose = require('mongoose');
const pirateSchema = require('../model/Pirate');
const weaponSchema = require('../model/Weapon');
const Pirate = mongoose.model('Pirate', pirateSchema);
const Weapon = mongoose.model('Weapon', weaponSchema);

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

  	let saber = new Weapon({name: 'Saber', damage: 5});
  	let pirate = new Pirate({firstname : 'Ann', lastname: 'Bonny', weapon: saber });

  	saber.save(function (err, pirate) {
	    if (err) return console.error(err);
	 });

  	pirate.save(function (err, pirate) {
	    if (err) return console.error(err);
	    pirate.speak();
	 });
  };

  kill(name) {
  	var regEx = new RegExp('^'+name,'i');

	Pirate.findOneAndRemove({lastname: regEx}, (err, pirate) => {
	  if (err) return console.error(err);
	  console.log(pirate);
	});
  }

  evolve(id) {
  	console.log(id);
  	Pirate.update({ _id: id }, { $set: { lastname: 'Teach', firstname: 'Edward' }}, (err, pirate) => {
	  if (err) return console.error(err);
	  console.log(pirate);
	});
  }
}

module.exports = PirateController;
