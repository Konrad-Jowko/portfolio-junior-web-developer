const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  eng: { type: Object },
  pl: { type: Object },
});


module.exports = mongoose.model('Portfolio', portfolioSchema);
