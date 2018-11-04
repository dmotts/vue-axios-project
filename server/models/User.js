var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    email: String,
    age: Number,
    country: String,
    password: String,
    hobbies: [String]
});

module.exports = mongoose.model('User', UserSchema);