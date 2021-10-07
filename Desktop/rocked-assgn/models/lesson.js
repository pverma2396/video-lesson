const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    videoUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('lesson', lessonSchema);