var express = require('express');

var router = express.Router();

/* GET home page. */
router.get("/api", function(req, res) {
  res.json({ "users": ["userOne","userTwo", "userThree"] });
});

router.post("/api/add", function(req,res){
  return res.redirect('/api');
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express WTF' });
});

module.exports = router;
