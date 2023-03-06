const express = require("express");
const { sendMessage, allMessages } = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router()

//send message
router.route('/').post(protect, sendMessage)
//fetch all the messages in a chat
router.route('/:id').get(protect, allMessages)


module.exports = router;