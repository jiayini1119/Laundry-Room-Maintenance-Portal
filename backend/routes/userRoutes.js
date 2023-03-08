const express = require('express');
const { registerUser, authUser, editUser} = require('../controllers/userControllers');

const router = express.Router()

router.route('/').post(registerUser)

router.post('/login', authUser);

router.post('/edit', editUser);



module.exports = router;