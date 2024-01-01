const express = require('express');
const router = express.Router();
const { getRests } = require('../db');
const { findById } = require('../db');

/* GET users listing. */
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const restDishes = findById(Number(id)).dishes;
    console.log( restDishes );
    res.render('menu', { restDishes });
});

module.exports = router;
