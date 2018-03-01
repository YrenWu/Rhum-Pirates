const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.findAll();
});

router.get('/join-piratry', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.enrolment();
});

router.get('/hanging/:name([a-z]+)', (req, res, next) => {
  let name = req.params.name;

  pirateCtrl.kill(name);
  res.render('index', { title: 'Pirate enrolment' });
});

router.get('/evolve', (req, res, next) => {
  res.render('index', { title: 'Pirate enrolment' });
  pirateCtrl.evolve();
});

router.get('/:name([a-z]+)', (req, res, next) => {
  let name = req.params.name;
  
  pirateCtrl.findByName(name);
  res.render('index', { title: 'Pirate enrolment' });
});

module.exports = router;
