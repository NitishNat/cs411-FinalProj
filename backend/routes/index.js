var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nit123#$root",
  database: "google_scholar"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello World');
});

router.get('/researcherData', function(req, res, next) {
  var authorName = req.query.name;
  console.log(authorName);
  
  con.query("select * from researcher where author_name = '" + authorName + "'", function(err, output) {
    if (err)
      throw err;
    res.send(output);
  })
});

router.post('/addResearcherRecord', function(req, res, next) {

  var authorData = req.body;
  console.log(authorData);
  
  con.query("insert into researcher (author_id, author_name, affiliation, total_citations, interests, url_picture) values (" + authorData.author_id + ", '" + authorData.author_name
  + "', '" + authorData.affiliation + "', " + authorData.total_citations + ", '" + authorData.interests + "', '" + authorData.url_picture + "')", function(err, output) {
    if (err)
      throw err;
    res.send(output);
  })
});


router.put('/updateResearcherRecord', function(req, res, next) {
  var newTotalCitations = req.body.total_citations;
  console.log(newTotalCitations);
  
  var authorName = req.body.authorName;
  console.log(authorName);
  
  con.query("update researcher set total_citations = " + newTotalCitations + " where author_name = '" + authorName + "'", function(err, output) {
    if (err)
      throw err;
    res.send(output);
  })
});


router.delete('/deleteAuthorRecord', function(req, res, next) {
  var authorName = req.query.authorName;
  console.log(authorName);
  
  con.query("delete from researcher where author_name = '" + authorName + "'", function(err, output) {
    if (err)
      throw err;
    res.send(output);
  })
});
  



module.exports = router;
