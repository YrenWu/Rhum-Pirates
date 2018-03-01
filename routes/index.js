const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();

/* GET home page. */
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

module.exports = router;
