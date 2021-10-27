import dotenv from 'dotenv';
dotenv.config()
import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import logger from './logging/logger.js'
import {configureLogger} from './logging/logger.js'
import { startRouting, configureApp, connectToDatabase} from './utils/initializer.js';

//Create object
const app = express();
//Set the port
const port = process.env.PORT || 2580;
//"Creates" the server
let server = http.createServer(app);
//Configure logger
configureLogger();

/**
 * Starter og initialiserer systemer
 * @author Sivert - 233518
 */
async function startSystems() {
  try {
    //Koble til database
    await connectToDatabase(mongoose);
    configureApp(app);
  } catch(err) {
      logger.error(err);
      serverFailure();
  }

  startRouting(app);



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