import express from 'express';
import bookingButtonRoutes from './routes/bookingButton';
import authRoutes from './routes/auth';

const app = express();

app.use('/booking-button', bookingButtonRoutes);
app.use('/auth', authRoutes);

export default app;