const {Schema, model} = require('mongoose');
const { triggerAsyncId } = require('async_hooks');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is a required field',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is a required field',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});
//get total amount of thoughts and replies on retreival
UserSchema.virtual('thoughtCount').get(function(){
    return this.thoughts.length;
});

const User = model('User', UserSchema);
module.exports = User;