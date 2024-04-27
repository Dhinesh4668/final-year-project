const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  encrypted: { type: Boolean, default: true }, // Indicates whether the message is end-to-end encrypted
});

module.exports = mongoose.model('Message', MessageSchema);
