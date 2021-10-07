const mongoose = require('mongoose');

const takeawaySchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    lesson: { 
        type: mongoose.Types.ObjectId,
        ref: 'lesson',
        required: true
     },
    conclusion: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('takeaway', takeawaySchema);