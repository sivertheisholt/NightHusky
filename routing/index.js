/** Routing til index siden
 * Her routes valgt språk
 */

const express = require('express');
const router = express.Router();

router.use('/', require('./indexRouter'));

 
module.exports = router;