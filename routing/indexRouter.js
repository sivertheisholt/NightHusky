/** Hoved routing
 * Her går alle routes gjennom
 */
import express from 'express';
import collab from './collab.js';
const router = express.Router();

router.use("/collab", collab);
 
export default router;