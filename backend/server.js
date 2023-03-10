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
const server = app.listen(PORT, console.log("Server successfully started on PORT", PORT));

//set up socket.io
const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
      origin: "http://localhost:3000",
  }
})

//connect
io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  //set up for the user
  socket.on("setup", (userData) => {
    socket.join(userData);
    socket.emit("user connected");
    });
});
