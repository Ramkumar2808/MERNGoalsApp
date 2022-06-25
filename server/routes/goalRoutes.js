import express from 'express';

import { deleteGoal, getGoals, storeGoals, updateGoal } from '../controllers/goalsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getGoals);

router.post('/', protect, storeGoals);

router.put('/:id', protect, updateGoal);

router.delete('/:id', protect, deleteGoal);

export default router;
