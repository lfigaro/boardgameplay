const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    user: {
        type: String
    },
    name: {
        required: true,
        type: String
    },
    city: {
        type: String
    },
    pass: {
        required: true,
        type: String
    }
})
dataSchema.path('_id'); 

module.exports = mongoose.model('users', dataSchema)