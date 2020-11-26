const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//rotas
router.get('/', (req, res) => {
    res.render('home')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/vacina', (req, res) => {

    res.render('vacina')
});

router.get('/postos', (req, res) => {

    res.render('postos')
});


router.get('/cad', (req, res) => {
    Post.func.findAll({
        order: [
            ["id", "ASC"]
        ]
    }).then(function(funcionarios) {
        res.render("cad", { funcionarios: funcionarios })
    })

});

router.get('/deletar/:id', (req, res) => {
    Post.func.destroy({ where: { "id": req.params.id } }).then(function() {
        res.redirect("/cad")
    }).catch(function(erro) {
        res.send("nao existe!")
    })
});


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
        Post.func.create({
            nome: req.body.nome,
            Email: req.body.Email,
            senha: req.body.senha
        }).then(function() {
            res.send("login")
        }).catch(function(erro) {
            res.send("erro: " + erro)
        })
    }


});


module.exports = router;