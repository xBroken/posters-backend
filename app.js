
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/event', require('./routes/eventRoutes'));
app.use('/poster', require('./routes/posterRoutes'));

module.exports = app;
