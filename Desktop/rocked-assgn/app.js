const express = require('express');
const mongoose = require('mongoose');
const app = express();

var course = ["course1", "course2", "course3"];

const lessonRoutes = require('./api/lesson');
const lectureRoutes = require('./api/lecture');
const takeawayRoutes = require('./api/takeaway');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

app.use('/lesson', lessonRoutes);
app.use('/lecture', lectureRoutes);
app.use('/takeaway', takeawayRoutes);



app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});



module.exports = app;