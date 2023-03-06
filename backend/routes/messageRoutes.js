const express = require("express");
const { sendMessage } = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router()

//send message
router.route('/').post(protect, sendMessage)
//fetch all the messages in a chat
// router.route('/:reportID').get(protect, allMessages)


module.exports = router;