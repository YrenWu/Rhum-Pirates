const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.findAll();
});

router.get('/rackham', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.findByName();
});

router.get('/join-piratry', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.create();
});

router.get('/hanging', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.kill();
});

router.get('/evolve', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.evolve();
});


module.exports = router;
