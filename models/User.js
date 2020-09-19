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
    thoughts: []

})

const User = model('User', UserSchema);
module.exports = User;