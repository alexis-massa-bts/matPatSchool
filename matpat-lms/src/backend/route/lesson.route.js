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
//All
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
//One : id
router.route("/:id").get((req, res) => {
  const lessonID = req.params.id;
  db.getDB()
    .collection(collection)
    .find({ _id: db.getPrimaryKey(lessonID)})
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
      { _id: db.getPrimaryKey(lessonID) },
      {
        $set: {
          lessonName: userInput.lessonName,
          date: userInput.date,
          description: userInput.description,
        },
        $addToSet: {
          content: userInput.content
        },
      },
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

module.exports = router;
