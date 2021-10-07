const express = require('express');
const router = express.Router();

const takeaway = require('../models/takeaway');
const mongoose = require('mongoose');

router.get('/:id', (req, res) => {
    const takeawayId = req.params.id;
    takeaway.findById(takeawayId).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    
    const takeawayCreate = new takeaway({
        _id: new mongoose.Types.ObjectId(),
        lesson: req.body.lesson,
        conclusion: req.body.conclusion
    });

    takeawayCreate.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router
