const mongoose = require('mongoose');
const User = require('./user-model');
const { Schema } = require('mongoose');

const dataSchema = new mongoose.Schema({
    users: [{
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }],
    boardgame: {
        type: Schema.Types.ObjectId, 
        ref: 'boardgames'
    },
    expansions:[{
        type: Schema.Types.ObjectId, 
        ref: 'boardgames'
    }],
    date: { 
        type: Date, 
        default: Date.now 
    }
})
dataSchema.path('_id');

module.exports = mongoose.model('matchs', dataSchema)