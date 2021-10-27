import mongoose from 'mongoose';

//Schema til quote
const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
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

let model = mongoose.model('user', userSchema);

export default model;