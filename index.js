import express from 'express';
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

const app = express();
const PORT = 5000;
connectDB();

app.use(express.json());  // this makes to parse it as req.body i e. the json will be easily accesed by the request body

// Use routes
app.use('/attendance', authRoutes); // all routes will start with /api ie api is end point

app.get('/', (req, res) => {
  res.send('API is running');
});

//for port running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
