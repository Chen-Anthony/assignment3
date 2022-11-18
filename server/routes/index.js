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
  





module.exports = router;
