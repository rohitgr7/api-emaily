const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = require('./recipient');

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  recipients: [recipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: {
    type: Date
  },
  lastResponded: {
    type: Date
  }
});

mongoose.model('surveys', surveySchema);
