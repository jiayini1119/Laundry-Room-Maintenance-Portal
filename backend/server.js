const express=require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express()
dotenv.config();
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get("/", cors(), (req,res)=>{
})

app.post("/", cors(), async(req,res)=>{
  const {username, email, password, dorm} = req.body
  try{
    const checkEmail=await collection.findOne({email:email})

    if(checkEmail){
      res.json("exist")
    }else{
      res.json("nonexist")
    }
  } catch(e) {
    res.json("nonexist")
  }
})

app.post("/signup", cors(), async(req,res)=>{
  const {username, email, password, dorm} = req.body
  const data = {
    username:username,
    email:email,
    password:password
  }
  try{
    const checkEmail=await collection.findOne({email:email})

    if(checkEmail){
      res.json("exist")
    }else{
      res.json("nonexist")
      await collection.insertMany([data])
    }
  } catch(e) {
    res.json("nonexist")
  }
})

const PORT = process.env.PORT
app.listen(PORT, console.log("Server successfully started on PORT", PORT));
