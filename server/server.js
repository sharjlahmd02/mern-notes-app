import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';

//initalize express app
const app = express();
connectDB();

//load environment variables
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/notes', notesRoutes);

//start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});