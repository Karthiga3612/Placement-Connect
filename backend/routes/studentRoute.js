const express = require('express');
const { registerStudent } = require('../controllers/studentController');
const { loginStudent } = require('../controllers/authController');
const router = express.Router();
const { getStudentProfile } = require('../controllers/studentController');


router.post('/register', registerStudent);
//router.get('/login',loginStudent);
router.post('/student-login', loginStudent);
router.get('/profile', getStudentProfile);

module.exports = router;