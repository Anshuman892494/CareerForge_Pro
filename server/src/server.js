require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const aiRoutes = require('./routes/aiRoutes');
const saasRoutes = require('./routes/saasRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes will be imported here
app.use('/api/ai', aiRoutes);
app.use('/api/saas', saasRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'CareerForge Pro API is running' });
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/careerforge')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
