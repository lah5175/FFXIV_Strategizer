const Sequelize = require('sequelize');
const db = require('../db');

const Strategy = db.define('strategy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Untitled'
  }
})

module.exports = Strategy;