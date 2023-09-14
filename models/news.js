const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
  date: {type: Date},
  summary: {type: String, required: true, maxLength: 100},
  content: {type: String, required: true, maxLength: 2000},
  imgUrl: {type: String, required: true, maxLength: 200}
})

const News = mongoose.model('News', schema)

module.exports = News;