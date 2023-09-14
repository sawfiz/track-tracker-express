const  {DateTime} = require("luxon")
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const News = require('../models/news')

// GET news listing
router.get('/', asyncHandler(async (req, res, next) => {
  const allNews = await News.find().sort({date: 1}).exec()
  res.render('news', {news_list: allNews})
}))

// POST to add news
router.post('/', function(req, res, next) {
  const today = DateTime.fromJSDate(new Date()).toISODate()
  res.render('news_form', {title: 'Add News', today})
})

module.exports = router;