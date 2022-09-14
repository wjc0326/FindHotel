import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import hotelRouter from './routes/hotelRouter.js';
import roomRouter from './routes/roomRouter.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB.');
  } catch (err) {
    throw error;
  }
};

// In case if there is a DB disconnection error, log the error
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconneted!');
});

// MIDDLEWARE
app.use(cors());
app.use(cookieParser());

// By using this middleware, can send json req to the server
app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/hotel', hotelRouter);
app.use('/room', roomRouter);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || 'Something went wrong!';

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

const port = 8800;
app.listen(port, () => {
  connect();
  console.log(`App is running on port ${port}.`);
});
