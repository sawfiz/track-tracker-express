const  {DateTime} = require("luxon")
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const News = require('../models/news')

// GET news listing
router.get('/', asyncHandler(async (req, res, next) => {
  const allNews = await News.find().sort({date: 1}).exec()
  res.render('news_list', {news_list: allNews})
}))

// POST to add news
router.post('/', function(req, res, next) {
  const today = DateTime.fromJSDate(new Date()).toISODate()
  res.render('news_form', {title: 'Add News', today})
})

router.get('/:id', asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id).exec()
  console.log("🚀 ~ file: news.js:21 ~ router.get ~ news:", news)

  res.render('news_detail', {news: news})
}))

module.exports = router;