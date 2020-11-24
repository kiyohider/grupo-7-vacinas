// módulos
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");

const admin = require("./routes/admin");
const path = require("path");

//configurações
//handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    // public
app.use(express.static(path.join(__dirname, "public")));
//rotas
app.use('/', admin)






app.listen(8000, function() {
    console.log("rodando");
});