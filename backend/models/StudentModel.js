const mongoose = require("mongoose");

const StudentSchema=new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dorm: {
      type: String,
      requred: true,
    }
  })
  
  const Student = mongoose.model("Student", StudentSchema)
  
  module.exports=Student