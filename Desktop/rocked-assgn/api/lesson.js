const express = require('express');
const router = express.Router();

const lesson = require('../models/lesson')
const mongoose = require('mongoose');

router.get('/:id', (req, res) => {

    const lessonId = req.params.id;
    lesson.findById(lessonId).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    console.log(req.body);
    
    const lessonCreate = new lesson({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        subTitle: req.body.subTitle,
        description: req.body.description,
        videoUrl: req.body.videoUrl
    });

    lessonCreate.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});


module.exports = router;
