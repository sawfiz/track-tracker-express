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

// Display news create form on GET
exports.create_news_get = function (req, res, next) {
  const today = DateTime.fromJSDate(new Date()).toISODate();
  res.render('news_form', { title: 'Add News', today });
};

// Handle book create on POST
exports.create_news_post = asyncHandler(async (req, res, next) => {
  const news = new News({
    date: req.body.date,
    heading: req.body.heading,
    imgUrl: req.body.imgUrl,
    content: req.body.content,
    publish: req.body.publish === 'on',
  });
  await news.save();
  res.redirect('/news');
});

// Display detail page for a specific news item
exports.read_news_get = asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id).exec()
  res.render('news_detail', {news})
})

// Display news update form on GET
exports.update_news_get = asyncHandler(async(req, res, next) => {

  // Get the news from database
  const news = await News.findById(req.params.id).exec()

  if (news === null) {
    // No results.
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("news_form", {
    title: "Update News",
    news,
  })
})

// Handle news update form on POST
exports.update_news_post = (req, res, next) => {
  res.send("Not implement yet")
}

// Display news delete form on GET
exports.delete_news_get = (req, res, next) => {
  res.send("Not implement yet")
}

// Handle news delete form on POST
exports.delete_news_post = (req, res, next) => {
  res.send("Not implement yet")
}
