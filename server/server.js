const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({db});

const app = express();
const port = process.env.PORT || 5000;

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'Larryzaur says healers adjust, therefore it must be true',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', require('./api/users'));
app.use('/api/email', require('./api/email'));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

db.sync();
app.listen(port, () => console.log(`Listening on port ${port}`));