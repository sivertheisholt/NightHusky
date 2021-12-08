import express from 'express';
import {collab_get, collab_set} from '../controllers/collabController.js';
const router = express.Router();

router.route("/get").get(collab_get);
router.route("/set").get(collab_set);

export default router;