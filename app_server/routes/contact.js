var express = require('express');
var router = express.Router();
const controller = require('../controllers/contact');

/* GET about page. */
router.get('/', controller.contact);

module.exports = router;