const express = require('express');
const {getWeatherByCoord } = require('../controllers/weatherController');

const router = express.Router();

router.post('/', getWeatherByCoord);

module.exports = router;