import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a title/description'],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, 'Please add a valid amount'],
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: [true, 'Type must be income or expense'],
    },
    category: {
      type: String,
      enum: [
        'Food & Dining',
        'Shopping',
        'Transportation',
        'Bills & Utilities',
        'Entertainment',
        'Salary',
        'Investment',
        'Others',
      ],
      default: 'Others',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Expense = mongoose.model ('Expense', expenseSchema);
export default Expense;