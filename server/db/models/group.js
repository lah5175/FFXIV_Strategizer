const Sequelize = require('sequelize');
const db = require('../db');

const Group = db.define('group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    }
  }
})

module.exports = Group;