const express = require('express');
const router = express.Router();
const collabController = require('../controllers/collabController');
const asyncExpress = require('../utils/expressUtils');

router.route("/get").get(asyncExpress(collabController.collab_get));
router.route("/set").get(collabController.collab_set);

module.exports = router