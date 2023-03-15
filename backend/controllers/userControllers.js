const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, dorm } = req.body

    if (!name || !email || !password || !dorm){
        res.status(400);
        throw new Error("Please Enter All the Fields");
    }

    //check if user already exists 
    const userExists = await User.findOne({ email }); 
    if (userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    //create the user
    const user = await User.create({
       name,
       email,
       password,
       dorm, 
    });

    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            dorm: user.dorm,
            token: generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Failed to Create the User");      
    }

})

const authUser = asyncHandler(async(req, res) => {
    const {email, password, userType} = req.body;

    // restrict admin account to only login to staff portal
    if ((userType === "staff" && email != "admin@admin.com") || (userType === "student" && email === "admin@admin.com")) {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))){
        res.json({
           _id: user._id,
            name: user.name,
            email: user.email,
            dorm: user.dorm,
            token: generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

const editUser = asyncHandler(async (req, res) => {
    const { email, dorm } = req.body;

    if (dorm != "Hedrick" && dorm != "Sunset" && dorm != "Rieber" && dorm != "Deneve" && dorm != "Saxon") {
        res.status(400);
        throw new Error("Invalid dorm.");
    }

    const query = { 'email': email };
    const update = { 'dorm': dorm };

    const user = await User.findOneAndUpdate(query, update);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            dorm: user.dorm,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to edit user details.");      
    }
})

module.exports = {registerUser, authUser, editUser}

