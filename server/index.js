import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import goalRoutes from './routes/goalRoutes.js';

const app = express();
dotenv.config();

const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.use('/api/goals', goalRoutes);
