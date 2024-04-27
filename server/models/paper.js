const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaperSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  abstract: { type: String },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Paper', PaperSchema);