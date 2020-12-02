const express = require('express');
const router = express.Router();
const banco = require('../models/Post');
const passport = require("passport")
const bcrypt = require('bcryptjs');

router.get("/login", (req, res) => {
    res.render('login');
})



// router.post('/logar', (req, res, next) => {
//     passport.authenticate("local", {
//         successRedirect: "/",
//         failureRedirect: "/login",
//         failureFlash: true
//     })(req, res, next)
//     res.redirect('/')
// })

router.post('/logar', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: 'login'
}))




router.post('/cadastro', (req, res) => {
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

        banco.func.findOne({ where: { Email: req.body.Email } }).then((usuario) => {
            if (usuario) {
                req.flash("error_msg", "já existe um conta com este email no sistema")
                res.redirect("login")

            } else {

                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    console.log(hash)
                    banco.func.create({
                        nome: req.body.nome,
                        Email: req.body.Email,
                        senha: hash
                    }).then(() => {
                        console.log(hash)
                        req.flash("success_msg", "cadastro efetuado com sucesso");
                        res.redirect("login")
                    }).catch((erro) => {
                        req.flash("error_msg", "erro ao se cadastrar!")
                    })
                });
            }
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno")
            res.redirect("login")
        })

    }




});


module.exports = router