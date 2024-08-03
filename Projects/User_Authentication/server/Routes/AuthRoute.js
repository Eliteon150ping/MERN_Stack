const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware")

router.post('/', userVerification)
router.post('/signup', Signup);
router.post('/login', Login);

module.exports = router;
