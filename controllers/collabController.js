const collabHandler = require('../database/collabHandler');
const logger = require('../logging/logger');

//**** Movie *****/
exports.collab_get = async function(req, res) {
    logger.info('Getting collab')
    let collab = await collabHandler.collab_get();
    if(!collab) {
        res.status(404).send('Something went wrong getting collab');
    }
    res.status(200).send(collab.collab);
}

exports.collab_set = async function(req, res) {
    try {
        let people = req.query.collab.split(':');
        let stringPeople = 'ic3husky is currently playing with '
        let stringTwitch = 'you can find their content over at '
        for(let i = 0; i < people.length; i++){
            stringPeople += `${people[i]} `;
            if(people[i].indexOf('@')> -1) {
                stringTwitch += `${i == 0 ? '' : ' | '}https://www.twitch.tv/${people[i].replace('@', '')}`
            }
        }
        collabHandler.collab_set(req.query.setter, stringPeople + stringTwitch);
        res.status(200).send(`Thank you for updating the collab ${req.query.setter}!`);
    } catch(err) {
        res.status(400).send('Something went wrong setting collab');
    }
}