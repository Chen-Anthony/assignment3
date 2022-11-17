let express = require('express');
let router = express.Router();
let indexController=require('../controller/index');
router.get('/',indexController.displayHomePage);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/homepage', indexController.displayHomePage); 
  
/* GET about me. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme',{ title: 'About me' });
});



module.exports = router;
