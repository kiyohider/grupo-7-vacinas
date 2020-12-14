const express = require('express');
const router = express.Router();
const banco = require('../models/Post');
const { admin } = require("../helper/admin")



//exibe os postos cadastrados
router.get('/exibecadastro', (req, res) => {
    banco.post.findAll().then(function(postos) {
        res.render("exibecadastro", { postos: postos });
    });

});


//pagina de edição de quantidade de vacinas
router.get('/editeVacinas/:id', (req, res) => {
    banco.post.findOne({ where: { id: req.params.id } }).then((vacina) => {
        console.log(vacina.id)
        res.render("editeVacinas", { vacina: vacina })

    });
});

//posts que servem para editar cada quantidade
router.post('/cad1', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina1 = req.body.vacina1
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            console.log(vacina.id)
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad2', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina2 = req.body.vacina2
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad3', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina3 = req.body.vacina3
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad4', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina4 = req.body.vacina4
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad5', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina5 = req.body.vacina5
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad6', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina6 = req.body.vacina6
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad7', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina7 = req.body.vacina7
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad8', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina8 = req.body.vacina8
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad9', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina9 = req.body.vacina9
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad10', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina10 = req.body.vacina10
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad11', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina11 = req.body.vacina11
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad12', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina12 = req.body.vacina12
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad13', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina13 = req.body.vacina13
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad14', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina14 = req.body.vacina14
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});
router.post('/cad15', (req, res) => {
    banco.post.findOne({ _id: req.body.id }).then((vacina) => {
        vacina.vacina15 = req.body.vacina15
        vacina.save().then(() => {
            req.flash("success_msg", "valor alterado com sucesso");
            res.render("editeVacinas", { vacina: vacina });
        }).catch((err) => {
            req.flash("error_msg", "houve um erro interno" + err);
            res.redirect("editeVacinas");
        });
    });
});



module.exports = router;