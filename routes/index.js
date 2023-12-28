const express = require('express');
const router = express.Router();
const { getRests } = require('../db');

/* GET home page. */
router.get('/', (req, res, next) => {
  const restData = getRests();
  console.log( restData );
  res.render('index', { restData });
});

module.exports = router;
