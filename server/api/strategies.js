const express = require('express');
const router = express.Router();
const {Strategy, Phase} = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const strategies = await Strategy.findAll();
    res.json(strategies);
  } 
  catch (error) {
    next(error);
  }
})

router.get('/:stratId', async (req, res, next) => {
  try {
    const strategy = await Strategy.findByPk(req.params.stratId, {include: Phase});
    if (strategy) res.json(strategy);
    else res.sendStatus(404);
  } 
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, encounter, visibility, arena, user} = req.body; 
    const strategy = await Strategy.create({
      name, 
      encounter, 
      visibility, 
      arena,
      userId: user.id,
      phases: [
        {name: 'Untitled Phase'}
      ]
    },{
      include: [Phase]
    });
    res.json(strategy);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;