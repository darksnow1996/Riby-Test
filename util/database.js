const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('riby', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: path.join(__dirname,'..','test/database.sqlite')
});

module.exports = sequelize;