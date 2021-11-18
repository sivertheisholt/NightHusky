import logger from '../logging/logger.js';
import router from '../routing/index.js';

/**
 * Kobler til databasen
 * @param {Object} mongoose Database objektet som skal kobles til 
 * @returns {Promise} 
 */
async function connectToDatabase(mongoose) {
    return mongoose
        .connect(process.env.MONGO_DB_URL || "mongodb://localhost:27017/husky", { useNewUrlParser: true, useUnifiedTopology: true })
            .then((_) => {
                logger.log({level: 'info', message: 'Successfully connected to database!'})
                return true;
            })
            .catch((err) => {
                logger.log({level: 'error', message: `Cant connect to database! ${err}`})
                throw new Error(err);
            });
    }

/**
 * Konfigurerer applikasjonen første gang
 * @param {Object} app Express webserver applikasjonen
 * @returns {boolean}
 */
 function configureApp (app) {
    //Error handling
    app.use((err, req, res, next) => {
        res.send("Something wrong happen! Please try again later");
        logger.log({level: 'error',message: `Express threw an error! Error: ${err}`});
    });
    return true;
}

/**
 * Starter routing og socket
 * @param {Object} app Express webserver applikasjonen
 * @author Sivert - 233518
 */
function startRouting(app) {
    app.use(router);
}

export { startRouting, configureApp, connectToDatabase}