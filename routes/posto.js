const express = require('express');
const router = express.Router();
const banco = require('../models/Post');

router.get('/postos', (req, res) => {
    banco.post.findAll().then(function(vacinas) {
        res.render('postos', { vacinas: vacinas })
    })

});




module.exports = router