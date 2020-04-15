const express = require('express');
const router = express.Router();
const {User} = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } 
  catch (error) {
    next(error);
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) res.json(user);
    else res.sendStatus(404);
  } 
  catch (error) {
    next(error);
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
    const user = await User.create({username, email, password});
    req.login(user, err => (err ? next(err) : res.json(user)));
  } 
  catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).json('User already exists.');
    }
    else {
      next(error);
    }
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const {uid, password} = req.body;
    let user;

    if (uid.includes('@')) {
      user = await User.findOne({where: {email: uid}});
    }
    else {
      user = await User.findOne({where: {username: uid}});
    }

    if (!user) {
      console.error('No such user found: ', uid);
      res.status(401).json('Wrong username and/or password');
    }
    else if (!user.correctPassword(password)) {
      console.error('Incorrect password for user', uid);
      res.status(401).json('Wrong username and/or password');
    }
    else {
      req.login(user, err => err ? next(err) : res.json(user));
    }
  }
  catch (error) {
    next(error);
  }
})

router.post('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
})

router.get('/me', (req, res) => {
  res.json(req.user);
})

router.put('/:userId', async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findByPk(req.params.userId);
    const updatedUser = await user.update({email, password});
    res.json(updatedUser);
  } 
  catch (error) {
    next(error);
  }
})

router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy();
      res.sendStatus(204);
    }
    else res.sendStatus(404);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;