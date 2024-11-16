const express = require('express');
const weatherRoutes = require('./src/routes/weatherRoutes');
const weatherByCoordRoutes = require('./src/routes/weatherByCoordRoute');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/weather', weatherRoutes);
app.use('/coordinates',weatherByCoordRoutes);


module.exports = app;
