const express = require('express');
const router = express.Router();
const banco = require('../models/Post');


//rotas

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/postos', (req, res) => {

    res.render('postos')
});

router.get('/vacina', (req, res) => {

    res.render('vacina')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/cad', (req, res) => {
    banco.post.findAll().then(function(vacinas) {
        res.render("cad", { vacinas: vacinas })
    })

});


router.post('/cad', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina1 = req.body.vacina1
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso")
            res.redirect("/cad")
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err)
            res.redirect("/cad");
        })
    })

})



router.post('/add', (req, res) => {
    var erros = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: "nome invalido" })
    }
    if (!req.body.Email || typeof req.body.Email == undefined || req.body.Email == null) {
        erros.push({ texto: "email invalido" })
    }
    if (req.body.senha.length < 5) {
        erros.push({ texto: "senha tem menos de 5 caracteres" })
    }


    if (erros.length > 0) {
        res.render("login", { erros: erros })
    } else {
        banco.func.create({
            nome: req.body.nome,
            Email: req.body.Email,
            senha: req.body.senha
        }).then(() => {
            req.flash("success_msg", "cadastro efetuado com sucesso");
            res.redirect("login")
        }).catch((erro) => {
            req.flash("error_msg", "erro ao se cadastrar!")
        })
    }


});

router.get('/form', (req, res) => {
    res.render('form')
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
        vacina10: req.body.vacina10

    }).then(() => {
        res.redirect("login")
    }).catch((erro) => {
        res.render("error_msg")
    })


});


module.exports = router;