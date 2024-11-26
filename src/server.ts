
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', roleRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});