const express = require('express');
const router = express.Router();
const banco = require('../models/Post');
const passport = require("passport");
const bcrypt = require('bcryptjs');

router.get("/login", (req, res) => {
    res.render('login');

});





router.post('/logar',
    passport.authenticate("local", {

        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    }), (req, res) => {

        res.render('/');

    });

router.post('/cadastro', (req, res) => {
    var erros = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: "nome invalido" });
    }
    if (!req.body.Email || typeof req.body.Email == undefined || req.body.Email == null) {
        erros.push({ texto: "email invalido" });
    }
    if (req.body.senha.length < 5) {
        erros.push({ texto: "senha tem menos de 5 caracteres" });
    }

    if (erros.length > 0) {

        res.render("login", { erros: erros });

    } else {

        banco.func.findOne({ where: { Email: req.body.Email } }).then((usuario) => {
            if (usuario) {
                req.flash("error_msg", "já existe um conta com este email no sistema");
                res.redirect("login");

            } else {

                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    console.log(hash);
                    banco.func.create({
                        nome: req.body.nome,
                        Email: req.body.Email,
                        senha: hash
                    }).then(() => {
                        console.log(hash);
                        req.flash("success_msg", "cadastro efetuado com sucesso");
                        res.redirect("login");
                    }).catch((erro) => {
                        req.flash("error_msg", "erro ao se cadastrar!");
                    })
                });
            }
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno");
            res.redirect("login");
        })

    }




});


module.exports = router


// router.post("/logar", async(req, res) => {
//     const { Email, senha } = req.body;

//     const user = await banco.func.findOne({ where: { Email } });

//     if (!user)
//         return res.send("nao tem esse ai");

//     if (!await bcrypt.compare(senha, user.senha))
//         return res.send("invalid pass");

//     res.send({ user });
// })

// router.post("/logar", (req, res) => {
//     var Email = req.body.Email,
//         senha = req.body.senha;

//     banco.func.findOne({ where: { Email: Email } }).then(function(user) {
//         if (!user) {
//             console.log(senha, "comparada1")
//             res.redirect('/login');
//         } else {
//             console.log(senha, "comparada2")
//             bcrypt.compare(senha, bcrypt.hash, (erro, batem) => {
//                 console.log(senha, "comparada3")
//                 req.session.user = user.dataValues;
//                 res.redirect('/');
//             });

//         }
//     });
// });




// router.post('/logar', function(req, res) {
//     var Email = req.body.Email;
//     var senha = req.body.senha;
//     if (Email) {
//         console.log(Email, "email existe")
//         banco.func.findOne({ where: { Email: req.body.Email } }).then((error, results, fields) => {
//             console.log(Email, "email comparado")
//             bcrypt.compare(senha, bcrypt.hash, (erro, batem) => {
//                 console.log(senha, "comparada")

//                 console.log(Email, "senha fechou ")
//                 console.log(Email, "ok logado")
//                 req.session.login = true;
//                 req.session.Email = Email;

//                 res.redirect('/');


//             });


//         });
//     } else {
//         console.log(Email, "9")
//         res.send('Please enter Username and Password!');
//         res.end();
//     }
// });