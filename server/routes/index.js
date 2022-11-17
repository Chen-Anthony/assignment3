var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme',{ title: 'About me' });
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

/* GET contact. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
