const router = require('express').Router();
//const lessonController = require("../control/lesson.control");
const Lesson = require('../model/lesson.model');

router.route('/').get((req, res) => {
    Lesson.find().then(lessons => res.json(lessons)).catch(err => res.status(400).json('Err: ' + err));
});

// router.post('/add', function (req, res) {
//     lessonController.createlesson;
// });

module.exports = router;