const express = require('express');
const { registerUser, authUser, searchDorms } = require('../controllers/userControllers');
const { protect } = require ("../middleware/authMiddleware");

const router = express.Router()

router.route('/').post(registerUser).get(protect, searchDorms)

router.post('/login', authUser);



module.exports = router;