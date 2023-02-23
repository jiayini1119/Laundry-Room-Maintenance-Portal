const express=require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound } = require("./middleware/errorMiddleware");

const app = express()
dotenv.config();
connectDB()
app.use(express.json())

app.use(cors())

app.get("/", cors(), (req,res)=>{
})

app.use('/api/user', userRoutes)

app.use(notFound)

const PORT = process.env.PORT
app.listen(PORT, console.log("Server successfully started on PORT", PORT));
