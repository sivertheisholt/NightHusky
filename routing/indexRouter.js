/** Hoved routing
 * Her går alle routes gjennom
 */
 const express = require('express');
 const router = express.Router();

 router.use("/collab", require('./collab'));
 
 module.exports = router;