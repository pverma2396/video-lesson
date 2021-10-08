const express = require('express');
const router = express.Router();

const lecture = require('../models/lecture');
const lesson = require('../models/lesson')
const mongoose = require('mongoose');

router.get('/:id', (req, res) => {

    const lectureId = req.params.id;
    lecture.findOne({ _id: lectureId }).populate('parts', 'title subTitle').exec(function(err, lecture) {
        if(err) {
            res.status(500);
        }
        res.status(200).json(lecture);
    })
});

router.post('/', (req, res) => {

    const lectureCreated = new lecture({
        _id: new mongoose.Types.ObjectId,
        courseOverview: req.body.courseOverview,
        parts: req.body.parts
    });

    lectureCreated.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

router.patch('/', (req, res) => {
    console.log(req);
    var query = {'lecture': req.body.lectureId};

    lecture.findOne(query, function(err, doc) {
        if (err) return res.send(500, {error: err});
        doc.parts.push(req.body.lessonId);
        console.log(doc);
        doc.save();
        return res.send('Succesfully saved.');
    });

});


module.exports = router;