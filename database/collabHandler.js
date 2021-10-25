const logger = require('../logging/logger.js');
const Collab = require('./schemas/collabSchema');

exports.collab_get = async function() {
    let id;
    if(process.env.NODE_ENV == 'production') {
        id = '616ef346e4906a1ac5f3580b';
    } else {
        id = '617604649f7c01fffb0c7e70';
    }
    return await Collab.findOne({_id: id});
}

exports.collab_set = async function(setter, collabs) {
    let collab = await this.collab_get();
    return collab.updateOne({setter: setter, collab: collabs}).then((doc, err) => {
        if(err) {
            throw new Error(err);
        }
        return doc;
    })
}