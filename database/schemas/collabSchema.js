import mongoose from 'mongoose';

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

let module = mongoose.model('collab', collabSchema);

export default module;