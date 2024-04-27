const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  media: { type: String }, // URL to the post's media (e.g., image or video)
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
