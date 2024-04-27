const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users who are members of this community
  type: { type: String, enum: ['public', 'private'], default: 'public' }, // Type of community
});

module.exports = mongoose.model('Community', CommunitySchema);
