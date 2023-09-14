const express = require('express');
const router = express.Router();

// Require the controller module
const news_controller = require('../controllers/newsController');

/// NEWS ROUTES

// GET pubished news list
router.get('/', news_controller.news_list_get);

// GET handle Add News button in the news list page
router.get('/create', news_controller.create_news_get);

// POST create news in database
router.post('/create', news_controller.create_news_post)

// router.get('/', asyncHandler(async (req, res, next) => {
//   const allNews = await News.find().sort({date: 1}).exec()
//   res.render('news_list', {news_list: allNews})
// }))

// POST to add news
// router.post('/', function (req, res, next) {
//   const today = DateTime.fromJSDate(new Date()).toISODate();
//   res.render('news_form', { title: 'Add News', today });
// });

// router.get(
//   '/:id',
//   asyncHandler(async (req, res, next) => {
//     const news = await News.findById(req.params.id).exec();
//     console.log('🚀 ~ file: news.js:21 ~ router.get ~ news:', news);

//     res.render('news_detail', { news: news });
//   })
// );

module.exports = router;
