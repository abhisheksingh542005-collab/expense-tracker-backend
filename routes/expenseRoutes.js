import express from 'express';
import {
  getExpenses,
  addExpense,
  deleteExpense,
  getSummary,
} from '../controllers/expenseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getExpenses)
  .post(protect, addExpense);

router.get('/summary', protect, getSummary);
router.delete('/:id', protect, deleteExpense);

export default router;