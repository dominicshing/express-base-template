const router = require('express').Router();
const indexController = require('../controllers/index');

router.get('/', indexController.homePage);

module.exports = router;
