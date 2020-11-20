const router = require("express").Router();

const db = require("../db_connection");
const collection = "Lesson";

//CREATE
router.route("/add").post((req, res) => {
  const userInput = req.body;
  db.getDB()
    .collection(collection)
    .insertOne(userInput, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ result: result, document: result.ops[0] });
      }
    });
});

//READ
router.route("/").get((req, res) => {
  db.getDB()
    .collection(collection)
    .find({})
    .toArray((err, documents) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(documents);
        res.json(documents);
      }
    });
});

//UPDATE
router.route("/:id").put((req, res) => {
  const lessonID = req.params.id;
  const userInput = req.body;
  db.getDB()
    .collection(collection)
    .findOneAndUpdate(
      { _id: db.getPrimaryKey(lessonID)},
      { $set: { lessonName: userInput.lessonName } },
      { returnOriginal: false },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
});

//DELETE
router.route("/:id").delete((req, res) => {
  const lessonID = req.params.id;
  db.getDB()
    .collection(collection)
    .findOneAndDelete({ _id: db.getPrimaryKey(lessonID) }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
});

// router.post('/add', function (req, res) {
//     lessonController.createlesson;
// });

module.exports = router;
