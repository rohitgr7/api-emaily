const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

require('./db/connectDb');
require('./models/user');
require('./models/survey');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/billing');
const surveyRouter = require('./routes/survey');
const keys = require('./config/keys');

const app = express();

// Body-Parser Middleware
app.use(bodyParser.json());

// Express-Session Middleware
app.use(
  session({
    saveUninitialized: false,
    resave: true,
    secret: keys.sessionKey,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/user', surveyRouter);

if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join(__dirname, '..', 'client', 'build');
  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
