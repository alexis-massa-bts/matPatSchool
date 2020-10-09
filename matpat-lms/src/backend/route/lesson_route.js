const router = require("express").Router();
const Lesson = require("../model/lesson_model");
let lesson = require("../model/lesson_model");

router.route("/").get((req, res) => {
  lesson
    .find()
    .then((lesson) => res.json(lesson))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const lesson_name = req.body.lesson_name;
  const date = req.body.date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const description = req.body.description;

  const newLesson = new Lesson({
    lesson_name,
    date,
    startTime,
    endTime,
    description,
  });

  newLesson
    .save()
    .then(() => res.json("Lesson added"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").get((req, res) => {
  lesson
    .findById(req.params.id)
    .then((lesson) =>
      res.json(lesson).catch((err) => res.json("Error:" + err))
    );
});

router.route("/update/:id").post((req, res) => {
  lesson
    .findByIdAndUpdate(req.params.id)
    .then((lesson) => {
      lesson.lesson_name = req.body.lesson_name;
      lesson.date = req.body.date;
      lesson.startTime = req.body.statTime;
      lesson.endTime = req.body.endTime;
      lesson.description = req.body.description;
    })
    .catch((err) => res.status(400).json("Error:" + err));

  router.route("/delete/:id").delete((req, res) => {
    lesson
      .findByIdAndDelete(req.params.id)
      .then((lesson) => res.json(lesson))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;