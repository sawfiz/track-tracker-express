const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const News = require('../models/news');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // Display all published news
  const publishedNews = await News.find({ publish: true }).sort({ date: 1 }).exec();
  res.render('news_list', { news_list: publishedNews, admin: false });
}));

module.exports = router;
