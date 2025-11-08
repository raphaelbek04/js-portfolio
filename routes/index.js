
var path = require('path');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/test-css', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
