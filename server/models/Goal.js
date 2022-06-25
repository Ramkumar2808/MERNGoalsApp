import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    goal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Goals', goalSchema);
