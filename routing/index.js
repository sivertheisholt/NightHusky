/** Routing til index siden
 * Her routes valgt språk
 */

import express from 'express';
import indexRouter from './indexRouter.js';
const router = express.Router();

router.use('/', indexRouter);

export default router;