module.exports.test = (req, res, next) => {
  console.log('passing through middleware');
  next();
}

module.exports.countryCheck = (req, res, next) => {
  console.log(`country name: ${req.params.country}`);
  next();
}
