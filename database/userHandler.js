import logger from '../logging/logger';
import User from './schemas/userSchema';
import Api404Error from '../error/api404Error';

function getById(userId) {
    logger.log({level: 'info', message: `Getting user with id ${userId} from database`})
    return User.findOne({uid: userId}, function(err, user) {
        if(err) {
            throw new Api404Error(err);
        }
        return user;
    });
}

export {getById as userGetById}