const express = require('express');
const { registerStudent } = require('../controllers/studentController');
const { loginStudent } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerStudent);
router.get('/login',loginStudent);

module.exports = router;