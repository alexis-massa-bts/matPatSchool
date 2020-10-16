const Course = require("../model/course_model");

exports.getCourses = async function (req, res, next) {
  try {
    var courses = course.find({});
    return res.status(200).json({
      status: 200,
      data: courses,
      message: "Successfully retrieved courses",
    });
  } catch (e) {
    return res.status(400).json({ status: 200, message: e.message });
  }
};

exports.createcourse = async function (req, res, next) {
  
}

// router.route("/add").post((req, res) => {
//   const course_name = req.body.course_name;
//   const date = req.body.date;
//   const startTime = req.body.startTime;
//   const endTime = req.body.endTime;
//   const description = req.body.description;

//   const newcourse = new course(
//     course_name,
//     date,
//     startTime,
//     endTime,
//     description
//   );

//   newcourse
//     .save()
//     .then(() => res.json("course added"))
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
//       control.course_name = req.body.course_name;
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
