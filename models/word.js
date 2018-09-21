const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: { type: String },
  word_list : { type: Array }
});

const ModelClass = mongoose.model('search', wordSchema);

module.exports = ModelClass;
