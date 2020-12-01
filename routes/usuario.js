const express = require('express');
const router = express.Router();
const banco = require('../models/Post');
const bcrypt = require('bcryptjs');

router.get("/login", (req, res) => {
    res.render('login');
})


router.post('/login', (req, res) => {
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

        banco.func.findOne({ Email: req.body.Email }).then((usuario) => {
            if (usuario) {
                req.flash("error_msg", "já existe um conta com este email no sistema")
                res.redirect("login")
            } else {
                const novoUsuario = new banco.func({
                    nome: req.body.nome,
                    Email: req.body.Email,
                    senha: req.body.senha
                })


                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                        if (erro) {
                            req.flash("error_msg", "houve um erro no registro")
                            res.redirect("Login")
                        }

                        novoUsuario.senha = hash

                        novoUsuario.save().then(() => {
                            req.flash("success_msg", "usuario cadastrado")
                            res.redirect("login")
                        }).catch((err) => {
                            req.flash("error_msg", "houve um erro")
                            res.redirect("login")
                        })
                    })
                })
            }
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno")
            res.redirect("login")
        })

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


module.exports = router