const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  eng: { type: Object },
  pl: { type: Object },
});


module.exports = mongoose.model('About', aboutSchema);
