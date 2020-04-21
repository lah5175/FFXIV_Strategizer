const db = require('../db');
const Sequelize = require('sequelize');

const Step = db.define('step', {
  number: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 100
    }
  }
})

module.exports = Step;