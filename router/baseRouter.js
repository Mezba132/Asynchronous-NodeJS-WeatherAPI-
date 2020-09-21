const router = require('express').Router()
weatherMiddleware = require('../middlewares/weatherMiddleware');

router.use('/weather', weatherMiddleware.test, require('./weatherRouter'))

module.exports = router;
