const express = require('express');
const router = express.Router();
const banco = require('../models/Post');


//rotas da home e da tabela informativa das vacinas
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/vacina', (req, res) => {

    res.render('vacina');
});




module.exports = router;