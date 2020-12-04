const express = require('express');
const router = express.Router();
const banco = require('../models/Post');

router.get('/cadastroP', (req, res) => {
    res.render('cadastroP');
});


router.post('/addP', (req, res) => {

    banco.post.create({
        Nome: req.body.Nome,
        localizacao: req.body.localizacao,
        Email: req.body.Email,
        Senha: req.body.Senha,
        MedRespons: req.body.MedRespons,
        vacina1: req.body.vacina1,
        vacina2: req.body.vacina2,
        vacina3: req.body.vacina3,
        vacina4: req.body.vacina4,
        vacina5: req.body.vacina5,
        vacina6: req.body.vacina6,
        vacina7: req.body.vacina7,
        vacina8: req.body.vacina8,
        vacina9: req.body.vacina9,
        vacina10: req.body.vacina10,
        vacina11: req.body.vacina11,
        vacina12: req.body.vacina12,
        vacina13: req.body.vacina13,
        vacina14: req.body.vacina14,
        vacina15: req.body.vacina15

    }).then(() => {
        res.redirect("login")
    }).catch((erro) => {
        res.render("error_msg")
    });
});




module.exports = router;