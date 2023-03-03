const asyncHandler = require("express-async-handler");
const Dorm = require("../models/dormModel");
const Washer = require("../models/washerModel");

//get all the washers in a dorm
const getAllWashers = asyncHandler(async(req, res) => {
    try{
        const dormId = req.params.id;
        const dorm = await Dorm.findById(dormId).populate('washers');
        if (dorm) {
            return res.status(200).json(dorm.washers);
        }else {
            return res.status(400).json({ msg: 'Dorm not found' });
        }       
    }catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})

//search for a particular dorm by name
const searchDorms = asyncHandler(async(req, res) => {
    try{
        const dorm = await Dorm.find({name: req.query.search});
        if (dorm) {
            return res.status(200).send(dorm)
        }else {
            return res.status(400).json({ msg: 'Dorm not found' });
        }       
    }
    catch(error){
        res.status(400);
        throw new Error(error.message);
    }
});

//update a washer's status (if true -> false and vice versa)
const updateWasherStatus = asyncHandler(async(req, res) => {
    try{
        const washerId = req.params.id;
        const washer = await Washer.findById(washerId);
        if (washer) {
            washer.status = !washer.status;
            await washer.save(); // save to the database
            return res.status(200).json(washer);
        }else {
            return res.status(400).json({ msg: 'Washer not found' });
        }       
    }catch(error){
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = {getAllWashers, searchDorms, updateWasherStatus}