//modulo para bloquear os acesso direto a paginas que necessitam de login

module.exports = {

    admin: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        req.flash("error_msg", "você deve estar logado para acessar esta pagina");
        res.redirect("login");


    }
}