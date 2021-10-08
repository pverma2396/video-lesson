const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    courseOverview: {
        type: String,
        required: true
    },
    parts: [{ 
        type: mongoose.Types.ObjectId,
        ref: 'lesson',
        required: true
    }],
},
{
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = mongoose.model('lecture', lectureSchema);