const axios = require('axios');

exports.fetchWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await axios.get(url);
  return response.data;
};

exports.fetchWeatherByCoord = async (lon, lat) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${apiKey}`;
    
  
    const response = await axios.get(url);
    return response.data;
  };