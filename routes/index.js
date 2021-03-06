const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();
const WeaponController = require('../controller/WeaponController');
const weaponCtrl = new WeaponController();


router.get('/armory/:name([a-z]+)/:damages([0-9]+)', (req, res, next) => {
  let name = req.params.name;
  let damages = parseInt(req.params.damages);

  weaponCtrl.make(name, damages);  	
  res.render('index', { title: 'Armory' });

});

router.get('/armory', (req, res, next) => {
	pirateCtrl.equip();
	res.render('index', { title: 'Pirates' });
});

router.get('/how-much', (req, res, next) => {
  res.render('index', { title: 'Pirates' });
  pirateCtrl.howMuch();
});

router.get('/drunk', (req, res, next) => {
  res.render('index', { title: 'Pirates' });
  pirateCtrl.rhumForEveryone();
});

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pirates' });
  pirateCtrl.findAll();
});

router.get('/join-piratry', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.enrolment();
});

router.get('/hanging/:name([a-z]+)', (req, res, next) => {
  let name = req.params.name;

  pirateCtrl.kill(name);
  res.render('index', { title: 'Pirate was hanged ' + name });
});

router.get('/evolve/:id', (req, res, next) => {
  let id = req.params.id;
  
  pirateCtrl.evolve(id);
  res.render('index', { title: 'Pirate evolved' });
});

router.get('/:name([a-z]+)', (req, res, next) => {
  let name = req.params.name;

  pirateCtrl.findByName(name);
  res.render('index', { title: 'On the sea : ' + name });
});

router.get('/on-the-bridge', (req, res, next) => {
  pirateCtrl.findByAsc();
  res.render('index', { title: 'Pirates on the bridge' });
});

module.exports = router;
