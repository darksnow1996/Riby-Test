const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Event = sequelize.define('event',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    type:Sequelize.STRING,

});

module.exports = Event;