var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "GoogleScholar",
  multipleStatements: true
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
  
  con.query("SET @searched_author = '"+ authorName +"';CALL find_popular_authors(@searched_author, @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture);SELECT @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture;", function(err, output) {
    // con.query("select * from researcher where author_name = '" + authorName + "'", function(err, output) {
     if (err)
       throw err;
    else {
      console.log(output[2][0]);
      res.send(output[2][0]);
    }   
  })
});



router.get('/listOfPaper', function(req, res, next) {
  var authorName = req.query.name;
  console.log(authorName);
  
  con.query("select ar.title from researcher as au JOIN paper as ar on au.author_name = ar.author_name where ar.title is not null and au.author_name = '" + authorName + "' order by ar.title asc limit 10;", function(err, output) {

  
     if (err)
       throw err;
    else {
      console.log(output);
      res.send(output);
    }   
  })
});


router.get('/unaffiliatedPapers', function(req, res, next) {
  //var authorName = req.query.name;
  //console.log(authorName);
  con.query("select title from paper where affiliation = 'Unknown affiliation' group by title union select author_name from researcher where total_citations = 0 limit 10;", function(err, output) {

    
    
    
  //con.query("SET @searched_author = '"+ authorName +"';CALL find_popular_authors(@searched_author, @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture);SELECT @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture;", function(err, output) {

  //con.query("SET @searched_author = '"+ authorName +"';CALL find_popular_authors(@searched_author, @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture);SELECT @author_id, @author_name, @affiliation, @total_citations, @interests, @url_picture;", function(err, output) {
    // con.query("select * from researcher where author_name = '" + authorName + "'", function(err, output) {
     if (err)
       throw err;
    else {
      console.log(output);
      res.send(output);
    }   
  })
});





router.get('/noPaperAuthor', function(req, res, next) {
  //var authorName = req.query.name;
  //console.log(authorName);
  con.query("select interests, count(author_id) as num from researcher where interests != '' and author_id not in (select distinct AU.author_id from researcher AU, paper AR where AU.author_name = AR.author_name) group by interests order by num desc limit 10;", function(err, output) {

 
     if (err)
       throw err;
    else {
      console.log(output);
      res.send(output);
    }   
  })
});



router.get('/advancedFunction', function(req, res, next) {

  con.query("select * from popular_authors order by author_count desc;", function(err, output) {




     if (err)
       throw err;
    else {
      console.log(output);
      res.send(output);
    }   
  })
});






// "SET searched_author = '"+ authorName +"';CALL find_popular_authors(searched_author, author_id, author_name, affiliation, total_citations, interests, url_picture);SELECT author_id, author_name, affiliation, total_citations, interests, url_picture;"
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
