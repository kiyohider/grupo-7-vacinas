const Sequelize = require('sequelize');

// conexão com o banco
const sequelize = new Sequelize('vacinas', 'root', '', {
    host: "localhost",
    dialect: 'mariadb'
});



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};