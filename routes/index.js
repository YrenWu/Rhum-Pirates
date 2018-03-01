const express = require('express');
const router = express.Router();
const PirateController = require('../controller/PirateController');
const pirateCtrl = new PirateController();

/* GET home page. */
router.get('/', (req, res, next) => {
  pirateCtrl.findAll();
});

module.exports = router;
