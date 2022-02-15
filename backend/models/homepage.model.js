const mongoose = require('mongoose');

const homepageSchema = new mongoose.Schema({
  eng: { type: Object },
  pl: { type: Object },
});


module.exports = mongoose.model('Homepage', homepageSchema);
