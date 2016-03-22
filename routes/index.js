var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { image: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',
//                         verse: 'This is the song that doesnt end',
//                         nextLink: '/verse-1'});
// });
// router.get('/verse-1', function(req, res, next) {
//   res.render('index', { image: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
//                         verse: 'It just goes on and on my friend',
//                         nextLink: '/verse-2'});
// });
// router.get('/verse-2', function(req, res, next) {
//   res.render('index', { image: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
//                         verse: 'Some people started singing it not knowing what it was',
//                         nextLink: '/verse-3'});
// });
// router.get('/verse-3', function(req, res, next) {
//   res.render('index', { image: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg',
//                         verse: 'And theyll continue singing it forever just because',
//                         nextLink: '/'});
// });

router.get('/:place?', function(req, res, next) {
  var route = req.params.place || req.url;
  console.log(route);
  switch(route){
    case '/':
    res.render('index', { image: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',
                          verse: 'This is the song that doesnt end',
                          nextLink: '/verse-1'});
    break;
    case 'verse-1':
    res.render('index', { image: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
                          verse: 'It just goes on and on my friend',
                          nextLink: '/verse-2'});
    break;
    case 'verse-2':
    res.render('index', { image: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
                          verse: 'Some people started singing it not knowing what it was',
                          nextLink: '/verse-3'});
    break;
    case 'verse-3':
    res.render('index', { image: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg',
                          verse: 'And theyll continue singing it forever just because',
                          nextLink: '/'});
    break;
    }
});

module.exports = router;
