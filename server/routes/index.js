var express = require('express');
const {db, pushToDb,pullFromDb} = require('../db');
var router = express.Router();



/* GET home page. */
router.get("/api", function(req, res) {

  res.json({ "users": ["userOne","userTwo", "userThree"] });
});

router.post("/api/add", async(req,res)=>{
  const post = req.params;
  const result = await db.collection('instanames').insertOne({"name": [post]});
  res.json(result);
})


router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/add/:name',async(req,res)=>{
  const val = req.params.name;
  const result = pushToDb(val);
  res.json(result);
});

module.exports = router;
