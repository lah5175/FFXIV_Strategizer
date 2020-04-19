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
    const strategy = await Strategy.findByPk(req.params.stratId, {
      include: Phase, 
      order: [[Phase, 'id', 'ASC']]
    });
    
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

router.post('/:stratId/phase', async (req, res, next) => {
  try {
    const phase = await Phase.create({name: 'Untitled Phase', strategyId: req.params.stratId});
    res.json(phase);
  } 
  catch (error) {
    next(error);
  }
})

router.put('/phases/:phaseId', async (req, res, next) => {
  try {
    const phase = await Phase.findByPk(req.params.phaseId);
    if (phase) {
      phase.name = req.body.name;
      await phase.save();
      res.json(phase);
    }
    else res.sendStatus(404);
  } 
  catch (error) {
    next(error);
  }
})

router.delete('/phases/:phaseId', async (req, res, next) => {
  try {
    const phase = await Phase.findByPk(req.params.phaseId);
    if (phase) {
      await phase.destroy();
      res.sendStatus(204);
    }
    else res.sendStatus(404);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;