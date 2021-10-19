const mongoose = require('mongoose');

//Schema til quote
const collabSchema = new mongoose.Schema({
    setter: {
        type: String,
        default: null
    },
    collab: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('collab', collabSchema);