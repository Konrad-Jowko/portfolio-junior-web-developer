const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema({
  navbarElements: {
    eng: { type: Array },
    pl: { type: Array },
  },
});


module.exports = mongoose.model('Header', headerSchema);
