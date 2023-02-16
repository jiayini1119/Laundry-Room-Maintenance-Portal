const mongoose = require("mongoose");
require('dotenv').config({ path: './.env.dev' });

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("Successfully connected to data base");
})
.catch(()=>{
  console.log("Failed to connect to data base");
  console.log(process.env.MONGO_URL);
})

const schema=new mongoose.Schema({
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

const collection = mongoose.model("collection", schema)

module.exports=collection