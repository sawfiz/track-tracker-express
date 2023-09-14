const  {DateTime} = require("luxon")
const express = require('express')
const router = express.Router();

// GET news listing
router.get('/', function(req, res, next) {
  res.render('news')
})

// POST to add news
router.post('/', function(req, res, next) {
  const today = DateTime.fromJSDate(new Date()).toISODate()
  res.render('news_form', {title: 'Add News', today})
})

module.exports = router;