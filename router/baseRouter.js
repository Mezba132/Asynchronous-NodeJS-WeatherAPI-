const router = require('express').Router()

router.use('/weather', require('./weatherRouter'))

module.exports = router;
