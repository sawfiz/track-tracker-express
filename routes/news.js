const express = require('express');
const router = express.Router();

const validateObjectId = require('../utils/objectIdValidator');

// Require the controller module
const news_controller = require('../controllers/newsController');

/// NEWS ROUTES

// GET pubished news list
router.get('/', news_controller.news_list_get);

// GET request for creating a news item
router.get('/create', news_controller.create_news_get);

// POST request for creating a news item
router.post('/create', news_controller.create_news_post)

// GET request for one news item
router.get('/:id', validateObjectId, news_controller.read_news_get)


// GET request to update news.
router.get("/:id/update", validateObjectId, news_controller.update_news_get);

// POST request to update news.
router.post("/:id/update", validateObjectId, news_controller.update_news_post);

// GET request to delete news.
router.get("/:id/delete", validateObjectId, news_controller.delete_news_get);

// POST request to delete news.
router.post("/:id/delete", validateObjectId, news_controller.delete_news_post);

module.exports = router;
