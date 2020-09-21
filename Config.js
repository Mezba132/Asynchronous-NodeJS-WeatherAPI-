const API_CONFIG = {
  baseUrl: "http://api.openweathermap.org/data/2.5/weather",
  appId: "a5f490d51fc479a6f031e33819698f78",
  unit: "metric",
  getFullUrl: (function(query){
    return `${API_CONFIG.baseUrl}?q=${query}&appid=${API_CONFIG.appId}&units=${API_CONFIG.unit}`;
  })
}

module.exports.API_CONFIG = API_CONFIG;
