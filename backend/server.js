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
    socket.emit("User connected");
    });

  // join the chat
  socket.on("join chat", (room) => {
    socket.join(room)
    console.log("User joined chat room " + room)
  })

  // send new message
  socket.on("new message", (newMessageRecieved) => {
    const chat = newMessageRecieved.chat; //which chat it belongs to

    if (!chat.users) return console.log("users not found");

    // messages emitted to the other user not the logged user in the room
    chat.users.forEach((user) => {
      if (user == newMessageRecieved.sender._id){
        return;
      }
      socket.in(user).emit("message received", newMessageRecieved);
    });
});
});
