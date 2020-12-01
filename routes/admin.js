const express = require('express');
const router = express.Router();
const banco = require('../models/Post');


//Rotas Get

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/vacina', (req, res) => {

    res.render('vacina')
});

// router.get('/cad', (req, res) => {
//     banco.post.findAll().then(function(vacinas) {
//         res.render("cad", { vacinas: vacinas })
//     })

// });

//Rotas Post
// router.post('/cad1', (req, res) => {
//     banco.post.findOne({ _id: req.body.id }).then((vacina) => {
//         vacina.vacina1 = req.body.vacina1
//         vacina.save().then(() => {
//             req.flash("success_msg", "valor alterado com sucesso")
//             res.redirect("/cad")
//         }).catch((err) => {
//             req.flash("error_msg", "houve um erro interno" + err)
//             res.redirect("/cad");
//         })
//     })
// })
// router.post('/cad2', (req, res) => {
//     banco.post.findOne({ _id: req.body.id }).then((vacina) => {
//         vacina.vacina2 = req.body.vacina2
//         vacina.save().then(() => {
//             req.flash("success_msg", "valor alterado com sucesso")
//             res.redirect("/cad")
//         }).catch((err) => {
//             req.flash("error_msg", "houve um erro interno" + err)
//             res.redirect("/cad");
//         })
//     })
// })



module.exports = router;