const Sequelize = require('sequelize');
const db = require('../db');

const Phase = db.define('phase', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Untitled',
  }
})

module.exports = Phase;