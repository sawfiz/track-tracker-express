const asyncHandler = require('express-async-handler');
const News = require('../models/news');
const User = require('../models/user');

const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Display all published news items
exports.news_list_get = asyncHandler(async (req, res, next) => {
  // Dispaly all news, both published and unpublished
  const allNews = await News.find({ publish: true }).sort({ date: -1 }).exec();
  res.render('news_list', { news_list: allNews, admin: false });
});

// Display login on GET
exports.login_get = (req, res, next) => {
  console.log(req.session.messages);
  res.render('login', { title: 'Log In', message: req.session.messages });
};

// Handle login on POST
exports.login_post = passport.authenticate('local', {
    successRedirect: '/news',
    failureRedirect: '/login',
  });


// Display signup on GET
exports.signup_get = (req, res, next) => {
  res.render('signup', { title: 'Sing Up' });
};

// Handle signup on POST
exports.signup_post = async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    // if err, do something
    if (err) {
      console.log('Error hashing password');
    } // otherwise, store hashedPassword in DB
    else {
      try {
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        const result = await user.save();
        res.redirect('/');
      } catch (err) {
        return next(err);
      }
    }
  });
};
