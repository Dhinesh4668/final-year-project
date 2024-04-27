const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  otp: { type: String }, // One-time password for login
  profile: {
    name: { type: String },
    bio: { type: String },
    avatar: { type: String }, // URL to user's profile picture
    age: { type: Number }, // Optional: for age-based content filtering
  },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users followed by this user
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users following this user
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }], // Messages sent/received by this user
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // Posts created by this user
  communities: [{ type: Schema.Types.ObjectId, ref: 'Community' }], // Communities this user is a member of
});

module.exports = mongoose.model('User', UserSchema);
