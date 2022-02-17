const Header = require('../models/header.model');

/* GET HEADER COMPONENT CONTENT IN SELECTED LANGUAGE */
exports.get = async (req, res) => {
  try{
    const results = await Header.find();
    const result = results[0].navbarElements[req.params.lang];

    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
