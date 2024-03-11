const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/AuthMiddleware');

// Public routes (no authentication required)
router.post('/signup', AuthController.Signup);
router.post('/login', AuthController.Login);

// Private route (authentication required)
router.post('/refresh', authMiddleware.authenticateUser, AuthController.refreshToken);

module.exports = router;
