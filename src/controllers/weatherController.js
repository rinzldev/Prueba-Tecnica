const { fetchWeather } = require('../services/weatherService');
const { fetchWeatherByCoord } = require('../services/weatherService');

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ error: 'City is required' });
    }

    const weatherData = await fetchWeather(city);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

exports.getWeatherByCoord = async (req, res) => {
  try {
    const { lon, lat } = req.body;
    if (!lon || !lat) {
      return res.status(400).json({ error: 'Longitude and latitude are required' });
    }

    const overviewData = await fetchWeatherByCoord(lon, lat);
    res.status(200).json(overviewData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather overview' });
  }
};