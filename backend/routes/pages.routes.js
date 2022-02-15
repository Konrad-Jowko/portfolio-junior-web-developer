const express = require('express');
const router = express.Router();
const HeadersController = require('../controllers/headers.controller');
const HomepagesController = require('../controllers/homepages.controller');
const PortfoliosController = require('../controllers/portfolios.controller');
const AboutsController = require('../controllers/abouts.controller');
const ContactsController = require('../controllers/contacts.controller');

router.get('/header/:lang', HeadersController.get);
router.get('/homepage/:lang', HomepagesController.get);
router.get('/portfolio/:lang', PortfoliosController.get);
router.get('/about/:lang', AboutsController.get);
router.get('/contact/:lang', ContactsController.get);

module.exports = router;
