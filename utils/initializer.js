const logger = require('../logging/logger');

/**
 * Kobler til databasen
 * @param {Object} mongoose Database objektet som skal kobles til 
 * @returns {Promise} 
 */
exports.connectToDatabase = async function(mongoose) {
    return mongoose
        .connect(process.env.MONGO_DB_URL || "mongodb://localhost:27017/app", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
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
exports.configureApp = function(app) {
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
exports.startRouting = function(app) {
    app.use(require('../routing/index'));
}