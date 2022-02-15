const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  eng: { type: Object },
  pl: { type: Object },
});


module.exports = mongoose.model('Contact', contactSchema);
