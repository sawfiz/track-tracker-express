const { DateTime } = require('luxon');
const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');
const News = require('../models/news');

// Display all published news
exports.news_list_get = asyncHandler(async (req, res, next) => {
  const allNews = await News.find({ publish: true }).sort({ date: 1 }).exec();
  res.render('news_list', { news_list: allNews });
});

// Render Add News form
exports.create_news_get = function (req, res, next) {
  const today = DateTime.fromJSDate(new Date()).toISODate();
  res.render('news_form', { title: 'Add News', today });
};

// Create news in database
exports.create_news_post = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const news = new News({
    date: req.body.date,
    heading: req.body.heading,
    imgUrl: req.body.imgUrl,
    content: req.body.content,
    publish: req.body.publish === 'on',
  });
  console.log(
    '🚀 ~ file: newsController.js:29 ~ exports.create_news_post=asyncHandler ~ news:',
    news
  );

  await news.save();
  res.redirect('/news');
});

// router.get('/:id', asyncHandler(async (req, res, next) => {
//   const news = await News.findById(req.params.id).exec()
//   console.log("🚀 ~ file: news.js:21 ~ router.get ~ news:", news)

//   res.render('news_detail', {news: news})
// }))

// module.exports = router;
