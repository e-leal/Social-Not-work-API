const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'thoughtText is a required field!',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
      default: Date.now,
      get: thoughtCreatedVal => moment(thoughtCreatedVal).format('MMM DD, YYYY [at] hh:mm a')

    },
    username: {
        type: String,
        required: 'username is a required field!'
    },
    reactions: []
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;