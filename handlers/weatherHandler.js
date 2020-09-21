const axios = require('axios'),
apiConfig = require('../Config.js').API_CONFIG
countries = require('../Constents.js').COUNTRIES;

module.exports.fetchWeather = (req, res) => {
  fetchWeatherAsync(countries.BD.DHAKA)
  .then(response => res.json(response.data))
  .catch(err => res.json(err.message || 'internal server error!!'));
}

module.exports.fetchWeatherByCountry = (req, res) => {
  fetchWeatherAsync(req.params.country)
  .then(response => res.json(response.data))
  .catch(err => res.json(err.message || 'internal server error!!'));
}

async function fetchWeatherAsync(country){
  const url = apiConfig.getFullUrl(country);
  let response = await axios.get(url);
  return response;
}

function fetchWeatherPromise(){
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=a5f490d51fc479a6f031e33819698f78&units=metric";
  return new Promise((resolve, reject) => {
    axios.get(url).then(response => resolve(response))
    .catch(err => reject(err));
  });
}
