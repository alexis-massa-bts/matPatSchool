const Lesson = require("../model/lesson_model");
const Circularjson = require('circular-json');

exports.getLessons = async function (req, res, next) {
  try {
    console.log('ici');
    var lessons = Circularjson.stringify(Lesson.find({}));
    console.log(lessons);
    return res.status(200).json({
      status: 200,
      data: lessons,
      message: "Successfully retrieved lessons"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createLesson = async function (req, res, next) {
  try {
    console.log('test');
    return true;
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

// router.route("/add").post((req, res) => {
//   const lesson_name = req.body.lesson_name;
//   const date = req.body.date;
//   const startTime = req.body.startTime;
//   const endTime = req.body.endTime;
//   const description = req.body.description;

//   const newLesson = new Lesson(
//     lesson_name,
//     date,
//     startTime,
//     endTime,
//     description
//   );

//   newLesson
//     .save()
//     .then(() => res.json("Lesson added"))
//     .catch((err) => res.status(400).json("Error :" + err));
// });

// router.route("/:id").get((req, res) => {
//   control
//     .findById(req.params.id)
//     .then((control) =>
//       res.json(control).catch((err) => res.json("Error:" + err))
//     );
// });

// router.route("/update/:id").post((req, res) => {
//   control
//     .findByIdAndUpdate(req.params.id)
//     .then((control) => {
//       control.lesson_name = req.body.lesson_name;
//       control.date = req.body.date;
//       control.startTime = req.body.statTime;
//       control.endTime = req.body.endTime;
//       control.description = req.body.description;
//     })
//     .catch((err) => res.status(400).json("Error:" + err));

//   router.route("/delete/:id").delete((req, res) => {
//     control
//       .findByIdAndDelete(req.params.id)
//       .then((control) => res.json(control))
//       .catch((err) => res.status(400).json("Error: " + err));
//   });
// });
