const express = require('express');
const router = express.Router();


router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'Handling GET requusts for a lecture/course',
        id: req.params.id
    })
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling POST requusts for a lecture/course'
    })
});


module.exports = router;