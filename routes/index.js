const express = require('express');
const router = express.Router();

// Require the controller module
const index_controller = require('../controllers/indexController');

// Index Routes

// Display home page
router.get('/', index_controller.news_list_get);

// Display login page
router.get('/login', index_controller.login_get);

// Handle login page post
router.post('/login', index_controller.login_post);

// Dispaly signup page
router.get('/signup', index_controller.signup_get);

// Handel signup page post
router.post('/signup', index_controller.signup_post);

module.exports = router;
