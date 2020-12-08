// módulos
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const admin = require("./routes/admin");
const path = require("path");
const usuarios = require("./routes/usuario");
const postos = require("./routes/posto");
const cad_postos = require("./routes/cad_posto");
const editarVacinas = require("./routes/editeVac");
const passport = require("passport");
require("./config/auth")(passport);

//configurações
function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('login');
}

//sessão


//passport
app.use(passport.initialize());
app.use(session({
    secret: "123",
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));
// app.use(passport.session());

//flash
app.use(flash());

//middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
})

//handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//body-parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public
app.use(express.static(path.join(__dirname, "public")));

//rotas
app.use('/', usuarios);
app.use('/', admin);
app.use('/', postos);
app.use('/', cad_postos);
app.use('/', editarVacinas);




app.listen(8000, function() {
    console.log("rodando");
});