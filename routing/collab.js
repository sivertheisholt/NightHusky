import express from 'express';
import {asyncExpress} from '../utils/expressUtils.js';
import {collab_get, collab_set} from '../controllers/collabController.js';
const router = express.Router();

router.route("/get").get(asyncExpress(collab_get));
router.route("/set").get(collab_set);

export default router;