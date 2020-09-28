const states = require('../Constents').STATES;

module.exports.test = (req, res, next) => {
  console.log('passing through middleware');
  next();
}

module.exports.countryCheck = (req, res, next) => {
  console.log(`country name: ${req.params.country}`);
  let countryAvailable = states.filter( state => state ===  req.params.country.toLowerCase());
  countryAvailable.length > 0 ? next() :  res.status(203).json({message:"state weather is not available right now!"});
}
