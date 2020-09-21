const router = require('express').Router(),
axios = require('axios'),
apiConfig = require('../Config.js').API_CONFIG
countries = require('../Constents.js').COUNTRIES;

router.get('/weather', (req, res) => {
  fetchWeatherAsync().then(response => res.json(response.data))
  .catch(err => res.json(err.message || 'internal server error!!'));
})

async function fetchWeatherAsync(){
  const url = apiConfig.getFullUrl(countries.BD.DHAKA);
  console.log(url);
  console.log("http://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=a5f490d51fc479a6f031e33819698f78&units=metric");
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

module.exports = router;
