const mongoose = require('mongoose');

//Schema til quote
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: null
    },
    dogs: {
        type: Array,
        default: null
    },
    cats: {
        type: Array,
        default: null
    },
    catchTime: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('user', userSchema);