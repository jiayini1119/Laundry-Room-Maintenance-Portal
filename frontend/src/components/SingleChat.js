import { Box, CircularProgress, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollableChat from "./ScrollableChat";
import {GetSender2} from "../config/ChatLogics"

import { ChatState } from "../Context/ChatProvider";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:4000"

var socket, selectedChatCompare;

/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email')
  const fullID = localStorage.getItem('fullID')
  const [socketConnected, setSocketConnected] = useState(false)
  
  const { selectedChat, setSelectedChat} = ChatState();
  var chatData = undefined;
  const id = localStorage.getItem('fullID');

  useEffect(() => {
    if (email !== "admin@admin.com") {
      chatData = JSON.parse(localStorage.getItem('chatData'));
    }
    setSelectedChat(chatData); 
  }, []);

  // set up and connect
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", fullID);
    socket.on("connected", () => setSocketConnected(true));  
  }, []);

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:4000/api/message/${selectedChat._id}`,
        config
      );

      setMessages(data);
      // console.log(data[data.length-1].sender._id);
      // console.log(data[0].sender._id);
      // if (id === '63f5cac44362fbc451422908' && data[data.length-1].sender._id !== data[0].sender._id && data[data.length-1].sender._id !== "63f5cac44362fbc451422908") {
      //   messages = messages.slice(0,-1);
      //   // console.log(messages)
      // }
      setLoading(false);
      // join the chat
      socket.emit("join chat", selectedChat._id)
    } catch (error) {
      alert("Failed to Load the Messages");
      return;
    }
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "http://localhost:4000/api/message",
          {
            content: newMessage,
            reportID: selectedChat._id,
          },
          config
        );
        socket.emit('new message', data)
        setMessages([...messages, data]);
      } catch (error) {
        alert("Failed to Send Message");
        return;
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
  };

  useEffect(() => {
    fetchMessages();

  }, [selectedChat]);

  useEffect(()=>{
    socket.on("message received", (newMessageReceived) => {
      console.log(newMessageReceived)
      setMessages([...messages, newMessageReceived])
    });  
  })

  return (
    <>
      {selectedChat ? (
        <>
        <Typography
          variant="h4"
          fontSize={{ base: "28px", md: "30px" }}
          paddingBottom={3}
          paddingLeft={2}
          width="100%"
          fontFamily="Work sans"
          display="flex"
          justifyContent={{ base: "space-between" }}
          alignItems="center"
        >
          <IconButton
            sx={{ display: { base: "flex", md: "none" } }}
            onClick={() => setSelectedChat("")}
          >
            <ArrowBackIcon />
          </IconButton>
          {messages && (
            <Stack direction="row" alignItems="center">
              {selectedChat.users[0].name}
            </Stack>
          )}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          padding={3}
          bgcolor="#E8E8E8"
          width="90%"
          height="100%"
          borderRadius="lg"
          overflowY="hidden"
          className="chatBox"
        >
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size={50} />
            </Box>
          ) : (
            <div className="messages">
              <ScrollableChat messages={messages} />
            </div>
          )}
          <FormControl onKeyDown={sendMessage} id="first-name" isRequired mt={3}>
            <TextField
              variant="filled"
              color="secondary"
              placeholder="Enter a message...(max 80 characters)"
              InputProps={{
                inputProps: {
                  maxLength: 80,
                },
              }}
              value={newMessage}
              onChange={typingHandler}
            />
          </FormControl>
        </Box>
      </>     
      ) : (
        // to get socket.io on same page
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <Typography variant="h3" gutterBottom color="white">
            Click on a report to view
          </Typography>

        </Box>
      )}
    </>
  );
};

export default SingleChat;