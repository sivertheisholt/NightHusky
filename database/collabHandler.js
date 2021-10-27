import logger from '../logging/logger.js';
import Collab from './schemas/collabSchema.js';

async function collab_db_get() {
    let id;
    if(process.env.NODE_ENV == 'production') {
        id = '616ef346e4906a1ac5f3580b';
    } else {
        id = '617604649f7c01fffb0c7e70';
    }
    return await Collab.findOne({_id: id});
}

async function collab_db_set(setter, collabs) {
    let collab = await this.collab_get();
    return collab.updateOne({setter: setter, collab: collabs}).then((doc, err) => {
        if(err) {
            throw new Error(err);
        }
        return doc;
    })
}

export {collab_db_set, collab_db_get};