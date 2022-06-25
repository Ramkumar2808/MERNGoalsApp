import express from 'express';

import { deleteGoal, getGoals, storeGoals, updateGoal } from '../controllers/goalsController.js';

const router = express.Router();

router.get('/', getGoals);

router.post('/', storeGoals);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

export default router;
