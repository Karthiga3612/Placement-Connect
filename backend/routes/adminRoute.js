const express = require('express');
const { registerAdmin } = require('../controllers/adminController');
const { loginAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/admin-login', loginAdmin);

module.exports = router;