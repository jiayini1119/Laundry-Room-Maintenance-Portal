import { Box, CircularProgress, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollableChat from "./ScrollableChat";

import { ChatState } from "../Context/ChatProvider";
const ENDPOINT = "http://localhost:4000"; 
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  
  const token = localStorage.getItem('token');
  
  const { selectedChat, setSelectedChat} = ChatState();

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
      setLoading(false);

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
        setMessages([...messages, data]);
      } catch (error) {
        alert("Failed to Send Message");
        return;
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    // if (!socketConnected) return;

    // if (!typing) {
    //   setTyping(true);
    //   socket.emit("typing", selectedChat._id);
    // }
    // let lastTypingTime = new Date().getTime();
    // var timerLength = 3000;
    // setTimeout(() => {
    //   var timeNow = new Date().getTime();
    //   var timeDiff = timeNow - lastTypingTime;
    //   if (timeDiff >= timerLength && typing) {
    //     socket.emit("stop typing", selectedChat._id);
    //     setTyping(false);
    //   }
    // }, timerLength);
  };



  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line
  }, [selectedChat]);

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
              {selectedChat.users[0]}
            </Stack>
          )}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          padding={3}
          bgcolor="#E8E8E8"
          width="100%"
          height="100%"
          borderRadius="lg"
          overflowY="hidden"
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
              placeholder="Enter a message.."
              value={newMessage}
              onChange={typingHandler}
            />
          </FormControl>
        </Box>
      </>     
      ) : (
        // to get socket.io on same page
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <Typography variant="h3" gutterBottom fontFamily="Work sans">
            Click on a user to start chatting
          </Typography>

        </Box>
      )}
    </>
  );
};

export default SingleChat;