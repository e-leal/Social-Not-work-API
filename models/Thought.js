const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Reactionbody is a required field',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'username is a required field'
    },
    createdAt: {
        type: Date,
      default: Date.now,
      get: thoughtCreatedVal => moment(thoughtCreatedVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    }
}
);

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
    reactions: [ ReactionSchema ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;