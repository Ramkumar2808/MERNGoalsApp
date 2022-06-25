import Goal from '../models/Goal.js';

export const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
};

export const storeGoals = async (req, res) => {
  const goal = await Goal.create({
    goal: req.body.goal,
    user: req.user.id,
  });
  res.status(201).json(goal);
};

export const updateGoal = async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body);
  await res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

export const deleteGoal = async (req, res) => {
  const goal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};
