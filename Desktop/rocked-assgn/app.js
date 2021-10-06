const express = require('express');
const app = express();

var course = ["course1", "course2", "course3"]

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'RockED Assignment'
    })
})

//courses apis
app.get('/courses', (req, res) => {
    res.status(200).json({
        courses : course
    })
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.status(200).json(course[id]);
})

//lessons apis

app.get('/lesson/:id', (req, res) => {
    const id = req.params.id;
    console.log("lesson id: " + id);
    res.status(200).json(id);
})

app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});


module.exports = app;