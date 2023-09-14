const express = require('express');
const router = express.Router();

const News = require('../models/news')

const asyncHandler = require('express-async-handler');

// POST to add news
router.post('/', asyncHandler(async(req, res, next) => {
  const news = new News({
    date: req.body.date,
    summary: req.body.summary,
    imgUrl: req.body.imgUrl,
    content: req.body.content
  })
  console.log("🚀 ~ file: add_news.js:12 ~ router.post ~ news:", news)
  
  await news.save();

}))

module.exports = router;