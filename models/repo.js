const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Repo = sequelize.define('repo', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:Sequelize.STRING,
    url:Sequelize.STRING
})
module.exports = Repo;