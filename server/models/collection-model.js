const mongoose = require('mongoose');
const User = require('./user-model');
const { Schema } = require('mongoose');

const innerDataSchema = new mongoose.Schema({
    dateFrom: { 
        type: Date, 
        default: Date.now 
    },
    dateTo: { 
        type: Date, 
        default: Date.now 
    },
    valuePaid: { 
        type: Number, 
        default: 0 
    },

    boardgame: {
        type: Schema.Types.ObjectId, 
        ref: 'boardgames'
    }
})
innerDataSchema.path('_id');

const dataSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    boardgames: [innerDataSchema]
})
dataSchema.path('_id');

module.exports = mongoose.model('collections', dataSchema)