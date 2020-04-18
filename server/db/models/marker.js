const Sequelize = require('sequelize');
const db = require('../db');
const {
  PLD,
  WAR,
  GNB,
  WHM,
  SCH,
  AST,
  MNK,
  DRG,
  NIN,
  SAM,
  BRD,
  MCH,
  DNC,
  BLM,
  SMN,
  RDM,
  BLU,
  ONE,
  TWO,
  THREE,
  FOUR,
  A,
  B,
  C,
  D,
} = require ('../../../client/src/constants');

const Marker = db.define('marker', {
  type: {
    type: Sequelize.STRING,
    defaultValue: PLD,
    validate: {
      isIn: [
        [
          PLD,
          WAR,
          GNB,
          WHM,
          SCH,
          AST,
          MNK,
          DRG,
          NIN,
          SAM,
          BRD,
          MCH,
          DNC,
          BLM,
          SMN,
          RDM,
          BLU,
          ONE,
          TWO,
          THREE,
          FOUR,
          A,
          B,
          C,
          D,
        ]
      ]
    }
  },
  x: {
    type: Sequelize.DOUBLE,
  },
  y: {
    type: Sequelize.DOUBLE,
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    }
  }
})

module.exports = Marker;