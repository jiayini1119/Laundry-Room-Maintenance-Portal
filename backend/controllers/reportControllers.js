const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

const getAllReports = asyncHandler(async(req, res) => {
    //For the staff: get all the reports from the students
    try{
        Chat.find({ 'users': req.user._id })
        .then(result => 
            res.status(200).send(result)
        );
    }catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})

const createReport = asyncHandler(async(req, res) => {
    //report to the staff
    const adminID = "63f5cac44362fbc451422908"

    //check whether the user has already reported
    const users = [req.user._id, adminID];
    const Report = await Chat.findOne({ users: { $all: users } });

    if (Report) {
        res.status(200).send(Report);
    }
    else{
        const reportData = {users: [req.user._id, adminID]};
        try{
            //store it into the database
            const createdReport = await Chat.create(reportData);
            res.status(200).json(createdReport);
        }
        catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
})

module.exports = {getAllReports, createReport}