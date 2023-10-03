const Sequelize = require('sequelize');

const sequelize = require('../util/database');  // database pool of connections

// create we create a model in which 'product' is name. we use the js objects in sequelize
const User = sequelize.define('users' , {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
  },

  name : {
   type :  Sequelize.STRING,
   allowNull : false 
  },

  phoneNumber: {
    type : Sequelize.DOUBLE,
    allowNull: false
  },

  email : {
    type: Sequelize.STRING,
    allowNull: false
  }

});  

module.exports = User;