const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Actor = sequelize.define('actor',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    login:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,

    },
    avatar_url:{
        type:Sequelize.STRING,
        allowNull:true

    }

});

module.exports = Actor;