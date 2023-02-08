const router = require('express').Router();
const authController = require('../controllers/auth');

// Sign up route
router.post('/signup', authController.signUp);

module.exports = router;
