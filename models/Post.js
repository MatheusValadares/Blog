const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  img: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: String, required: true },
  views: { type: Number, dafault: 0 }
});

module.exports = mongoose.model('Post', postSchema);