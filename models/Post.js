const db = require('./db');


const func = db.sequelize.define('funcionario', {

    nome: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

const post = db.sequelize.define('posto', {
    Nome: {
        type: db.Sequelize.STRING
    },
    localizacao: {
        type: db.Sequelize.STRING

    },
    MedRespons: {
        type: db.Sequelize.STRING
    }


});
post.hasMany(func)

//db.sequelize.sync({ force: true })

module.exports = {
    post,
    func
}