const localstrategy = require("passport-local").Strategy;
const banco = require('../models/Post');
const bcrypt = require("bcryptjs");





module.exports = function(passport) {
    passport.use(new localstrategy({ usernameField: 'Email', passwordField: "senha" }, (Email, senha, done) => {
        banco.func.findOne({ where: { Email: Email } }).then((user) => {
            if (!user) {

                return done(null, false, { message: "conta não existe" });
            }

            bcrypt.compare(senha, user.senha, (erro, batem) => {
                if (batem) {

                    return done(null, user);
                } else {

                    return done(null, false, { message: "senha incorreta" });
                }
            });

        });

    }));



    passport.serializeUser((user, done) => {

        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {

        banco.func.findByPk(id, (err, user) => {
            done(err, user);

        })

    });




}