const router = require('express').Router(),
weatherHandlers = require('../handlers/weatherHandler'),
weatherMiddleware = require('../middlewares/weatherMiddleware');

router.get('/', weatherHandlers.fetchWeather);
router.get('/:country', weatherMiddleware.countryCheck, weatherHandlers.fetchWeatherByCountry);
module.exports = router;
