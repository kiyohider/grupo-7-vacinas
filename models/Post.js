const db = require('./db');


const func = db.sequelize.define('funcionario', {

    nome: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    admin: {
        type: db.Sequelize.STRING,
        default: 'not'
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
    Email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    Senha: {
        type: db.Sequelize.STRING
    },
    MedRespons: {
        type: db.Sequelize.STRING
    },
    vacina1: {
        type: db.Sequelize.INTEGER
    },
    vacina2: {
        type: db.Sequelize.INTEGER
    },
    vacina3: {
        type: db.Sequelize.INTEGER
    },
    vacina4: {
        type: db.Sequelize.INTEGER
    },
    vacina5: {
        type: db.Sequelize.INTEGER
    },
    vacina6: {
        type: db.Sequelize.INTEGER
    },
    vacina7: {
        type: db.Sequelize.INTEGER
    },
    vacina8: {
        type: db.Sequelize.INTEGER
    },
    vacina9: {
        type: db.Sequelize.INTEGER
    },
    vacina10: {
        type: db.Sequelize.INTEGER
    },
    vacina11: {
        type: db.Sequelize.INTEGER
    },
    vacina12: {
        type: db.Sequelize.INTEGER
    },
    vacina13: {
        type: db.Sequelize.INTEGER
    },
    vacina14: {
        type: db.Sequelize.INTEGER
    },
    vacina15: {
        type: db.Sequelize.INTEGER
    },



});
post.hasMany(func);

//db.sequelize.sync({ force: true })

module.exports = {
    post,
    func
};