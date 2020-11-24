const express = require('express');
const router = express.Router();
const Post = require('../public/js/Post');

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

router.get('/form', (req, res) => {

    res.render('form')
});

router.get('/cad', function(req, res) {
    Post.findAll({
        order: [
            ["id", "ASC"]
        ]
    }).then(function(posts) {
        res.render("cad", { posts: posts })
    })

});

router.get('/deletar/:id', function(req, res) {
    Post.destroy({ where: { "id": req.params.id } }).then(function() {
        res.redirect("/cad")
    }).catch(function(erro) {
        res.send("nao existe!")
    })
});


router.post('/add', function(req, res) {
    Post.create({
        Nome: req.body.Nome,
        localizacao: req.body.localizacao,
        MedRespons: req.body.MedRespons
    }).then(function() {
        res.redirect("/cad")
    }).catch(function(erro) {
        res.send("erro: " + erro)
    })
});


module.exports = router;