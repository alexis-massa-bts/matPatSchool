const express = require('express');
const router = express.Router();
const lessonController = require("../controller/lesson_controller");

// router.get('/lesson', lessonController.getLessons);
router.route("/").get((req, res) => {
    res.send('oui');
});

router.post('lesson/add', lessonController.createlesson);

module.exports = router;