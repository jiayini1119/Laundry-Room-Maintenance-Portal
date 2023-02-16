const express=require("express")
const collection = require("./mongo")
const cors = require("cors")
const { Collection } = require("mongoose")
const app = express()
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

app.listen(3000,()=>{
  console.log("Successfully Connected to Port")
})