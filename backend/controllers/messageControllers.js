const asyncHandler = require("express-async-handler");
const Message = require('../models/messageModel')
const Chat = require('../models/chatModel')

const sendMessage = asyncHandler(async(req, res) => {
    try{
        const {content, reportID} = req.body
        if (!content || !reportID){
            res.status(400);
            throw new Error(error.message);
        }
    
        //create a new message
        const newMessage = {
            sender: req.user._id,
            content,
            chat: reportID
        }
    
        //store into the database
        const message = await Message.create(newMessage)
        await message.populate("sender", "name")
        await message.populate("chat")
    
        //update the latest conversation
        await Chat.findByIdAndUpdate(reportID, { latestConversation: message });
        return res.status(200).json(message);
    }catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})


const allMessages = asyncHandler(async(req, res) => {
    try{
        const chatID = req.params.id;
        //find all messages that belong to a particular chat
        const messages = await Message.find({chat: chatID})
        .populate("sender", "name")
        .populate("chat");
        if (messages) {
            return res.status(200).json(messages);
        }else {
            return res.status(400).json({ msg: 'Cannot fetch all the messages' });
        }  
    }catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})


module.exports = { sendMessage, allMessages }