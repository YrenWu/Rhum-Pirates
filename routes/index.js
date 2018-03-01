const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pirate factory' });
  pirateCtrl.findAll();
});

router.get('/rackham', (req, res, next) => {
  res.render('index', { title: 'Pirate factory' });
  pirateCtrl.findByName();
});

router.get('/join-piratry', (req, res, next) => {
  res.render('index', { title: 'Pirate factory' });
  pirateCtrl.create();
});

module.exports = router;
