require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('API rodando');
});


const userRoutes = require('./routes/user_routes');


app.use('/user', userRoutes);

module.exports = app;