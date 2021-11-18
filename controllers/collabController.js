import {collab_db_set, collab_db_get} from '../database/collabHandler.js';
import logger from '../logging/logger.js'

async function collab_get(req, res) {
    logger.info('Getting collab')
    let collab = await collab_db_get();
    if(!collab) {
        res.status(404).send('Something went wrong getting collab');
    }
    res.status(200).send(collab.collab);
}

async function collab_set(req, res) {
    try {
        logger.info('Request received for setting collab');
        let people = req.query.collab.split(':');
        let stringPeople = 'ic3husky is currently playing with '
        let stringTwitch = 'you can find their content over at '
        for(let i = 0; i < people.length; i++){
            if(people[i].length <= 1) continue;
            stringPeople += `${people[i]} `;
            if(people[i].indexOf('@')> -1) {
                stringTwitch += `${i == 0 ? '' : ' | '}https://www.twitch.tv/${people[i].replace('@', '')}`
            }
        }
        collab_db_set(req.query.setter, stringPeople + stringTwitch);
        res.status(200).send(`Thank you for updating the collab ${req.query.setter}!`);
    } catch(err) {
        logger.error(err);
        res.status(400).send('Something went wrong setting collab');
    }
}

export {collab_get, collab_set}