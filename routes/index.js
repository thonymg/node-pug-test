// Mongo
var mongoose = require('mongoose');
var Annonces = mongoose.model('Annonces');
// var Annonces = require('../db');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Annonces.find(function(err, annonces, count) {
    res.render('index', {
      title: 'Express Annonces App',
      annonces: annonces
    });
  });
});

router.get('/posts', (req, res, next) => {
  res.render('form', {
    title: 'formulaire'
  });
})

router.post('/posts', (req, res, next) => {
  let annonces = new Annonces({
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
    created_at: Date.now()
  })
  annonces.save((err, results) => {
    if (err) return next(err)
    res.redirect('/')
  })
})



module.exports = router;
