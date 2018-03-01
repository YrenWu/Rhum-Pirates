const mongoose = require('mongoose');
const weaponSchema = require('../model/Weapon');
const Weapon = mongoose.model('Weapon', weaponSchema);

mongoose.connect('mongodb://localhost/pj_mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

class WeaponController {

	make(name, damages) {
		let weapon = new Weapon({name: name, damage: damages, durability: damages+5});
	 
	    weapon.save(function (err, pirate) {
		    if (err) return console.error(err);
		});
	}

	use() {
		// TODO : $inc durability -1, if durability == 0 weapon.destroy()
	}

	repair() {
		// TODO : $set durability to weapon.damages + 5
	}

	destroy() {
		// TODO : delete weapon
	}
}

module.exports = WeaponController;
