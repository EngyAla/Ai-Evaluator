import { Router } from 'express';
import { evaluate } from '../controllers/evaluation.controller.js';

const router = Router();

// Route configuration
router.post('/evaluate', evaluate);

export default router;
