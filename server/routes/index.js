var express = require('express');
const {db} = require('../db');
var router = express.Router();



/* GET home page. */
router.get("/api", function(req, res) {

  res.json({ "users": ["userOne","userTwo", "userThree"] });
});

router.post("/api/add", async(req,res)=>{
  const post = req.params;
  const result = await db.collection(instanames).insertOne(post);
  res.json(result);
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
