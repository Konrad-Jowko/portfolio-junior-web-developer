const Homepage = require('../models/homepage.model');

/* GET ALL ORDERS */
exports.get = async (req, res) => {
  try{
    const results = await Homepage.find();
    const result = results[0][req.params.lang];

    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
