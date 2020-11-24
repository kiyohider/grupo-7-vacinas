const { Sequelize } = require('./db');
const db = require('./db');


const func = db.sequelize.define('funcionario', {

    nome: {
        type: db.Sequelize.STRING
    },
    Localizacao: {
        type: db.Sequelize.STRING
    },
    medRespons: {
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
func.hasMany(post)

// db.sequelize.sync({ force: true })

module.exports = {
    post,
    func
}