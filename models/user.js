const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {type: String, required: true, maxLength: 100},
  password: {type: String, required: true, maxLength: 100},
})

const User = mongoose.model('User', schema)

module.exports = User;