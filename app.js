require('dotenv').config();
const http = require("http");
const express = require("express");
const mongoose = require('mongoose');
const logger = require('./logging/logger');
const start = require('./utils/initializer');

//Create object
const app = express();
//Set the port
const port = process.env.PORT || 2580;
//"Creates" the server
let server = http.createServer(app);

/**
 * Starter og initialiserer systemer
 * @author Sivert - 233518
 */
async function startSystems() {
  try {
    //Koble til database
    await start.connectToDatabase(mongoose);
    start.configureApp(app);
  } catch(err) {
      logger.error(err);
      serverFailure();
  }

  start.startRouting(app);



  //"Lytter" serveren
  server.listen(port, () => logger.log({level: 'info', message: `Application is now listening on port ${port}`}));
}

//Starter server første gang
startServer()

/**
 * Starter serveren
 * @author Sivert - 233518
 */
function startServer() {
  try {
    startSystems();
  } catch(err) {
    logger.log({level: 'error', message: `Something unexpected happen when trying to start/running the server! ${err}`});
    serverFailure();
  }
}

/**
 * Setter en timeout på 5 minutter og prøver å restarte
 * @author Sivert - 233518
 */
async function serverFailure() {
  logger.log({level: 'info', message: `Trying to restart server in 5 minutes!`});
  await new Promise(r => setTimeout(r, 1000 * 60 * 5));
  logger.log({level: 'info', message: `Restarting systems now!`});
  startServer();
}