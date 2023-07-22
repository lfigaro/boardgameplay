const mongoose = require('mongoose');
const User = require('./user-model');
const { Schema } = require('mongoose');

const innerDataSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        default: Date.now 
    },
    text: {
        required: true,
        type: String
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})
innerDataSchema.path('_id');


//users: [User.schema],
const dataSchema = new mongoose.Schema({
    users: [{
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }],
    messages: [innerDataSchema]
})
dataSchema.path('_id');

module.exports = mongoose.model('messages', dataSchema)