const Sequelize = require('sequelize');
const db = require('../db');

const Strategy = db.define('strategy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Untitled'
  },
  encounter: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'misc'
  },
  visibility: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'public'
  },
  arena: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'square'
  }
})

module.exports = Strategy;