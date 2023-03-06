const express=require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const reportRoutes = require("./routes/reportRoutes");
const washerRoutes = require("./routes/washerRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound } = require("./middleware/errorMiddleware");

const app = express()
dotenv.config();
connectDB()
app.use(express.json())

app.use(cors())

app.get("/", cors(), (req,res)=>{
})

app.use('/api/user', userRoutes)
app.use('/api/washer', washerRoutes)
app.use('/api/report', reportRoutes)
app.use('/api/message', messageRoutes)

app.use(notFound)

app.post("/home", cors(), async(req, res) => {
  const {id} = req.body;

});

const PORT = process.env.PORT
app.listen(PORT, console.log("Server successfully started on PORT", PORT));
