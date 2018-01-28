const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./db/connectDb');
require('./models/user');
const auth = require('./routes/auth');
const api = require('./routes/billing');
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
app.use('/auth', auth);
app.use('/api', api);

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
