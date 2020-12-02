const express = require('express');
const router = express.Router();
const banco = require('../models/Post');



router.get('/', (req, res) => {
    res.render('home')
});

router.get('/vacina', (req, res) => {

    res.render('vacina')
});




module.exports = router;