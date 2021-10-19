const logger = require('../logging/logger.js');
const Collab = require('./schemas/collabSchema');

exports.collab_get = async function() {
    return await Collab.findOne({_id: "616ef346e4906a1ac5f3580b"});
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