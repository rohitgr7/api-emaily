const mongoose = require('mongoose');
const router = require('express').Router();

const Mailer = require('./../services/Mailer');
const surveyTemplate = require('./../services/emailTemplates/surveyTemplate');
const requireLogin = require('./../middlewares/requireLogin');
const requireCredits = require('./../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

router.get('/surveys/thanks', (req, res) => {
  res.send('Thanks for voting!');
});

router.post('/surveys', requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const recipientsArray = recipients
    .split(',')
    .map(email => ({ email: email.trim() }));

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipientsArray,
    _user: req.user.id,
    dateSent: Date.now()
  });

  const mailer = new Mailer(survey, surveyTemplate(survey));
  try {
    await mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (e) {
    res.status(422).send(e);
  }
});

module.exports = router;
