const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./../config/keys');
const User = require('mongoose').model('users');

const googleStrategyOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
};

const googleStrategy = new GoogleStrategy(
  googleStrategyOptions,
  async (accessToken, refreshToken, profile, done) => {
    const googleId = profile.id;

    const existingUser = await User.findOne({ googleId });

    if (!existingUser) {
      const newUser = await new User({ googleId }).save();
      done(null, newUser);
    } else {
      done(null, existingUser);
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(googleStrategy);
