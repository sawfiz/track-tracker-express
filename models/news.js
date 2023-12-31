const  {DateTime} = require("luxon")

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
  date: {type: Date},
  heading: {type: String, required: true, maxLength: 100},
  content: {type: String, required: true, maxLength: 2000},
  imgUrl: {type: String, maxLength: 200},
  publish: {type: Boolean}
})

// Virtual propety date_yyyy_mm_dd
schema.virtual("date_yyyy_mm_dd").get(function () {
  return this.date ? DateTime.fromJSDate(this.date).toISODate() : '';
});

// Virtual propety news_url
schema.virtual("url").get(function () {
  return `/news/${this._id}`;
});

const News = mongoose.model('News', schema)

module.exports = News;