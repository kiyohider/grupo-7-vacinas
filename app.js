// módulos
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const home = require("./routes/home");
const path = require("path");
const usuarios = require("./routes/usuario");
const postos = require("./routes/posto");
const cad_postos = require("./routes/cad_posto");
const editarVacinas = require("./routes/editeVac");
//const cookieParser = require("cookie-parser");
//const morgan = require("morgan")
const passport = require("passport");
require("./config/auth")(passport);

//configurações

//sessão
app.use(session({

    secret: "123",
    resave: false,
    saveUnitialized: false,
    cookie: {
        expires: 600000
    }

}));



//passport
app.use(passport.initialize());
app.use(passport.session());

//flash
app.use(flash());

//middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
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
app.use('/', home);
app.use('/', postos);
app.use('/', cad_postos);
app.use('/', editarVacinas);



//porta onde roda as rotas
app.listen(8000, function() {
    console.log("rodando");
});