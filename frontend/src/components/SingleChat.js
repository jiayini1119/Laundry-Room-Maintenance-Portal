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
  const email = localStorage.getItem('email')
  
  const { selectedChat, setSelectedChat} = ChatState();
  var chatData;

  if (email !== "admin@admin.com"){
    chatData = JSON.parse(localStorage.getItem('chatData'));
  }

  useEffect(() => {
    setSelectedChat(chatData); 
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
  };



  useEffect(() => {
    fetchMessages();
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
          <Typography variant="h3" gutterBottom fontFamily="Work sans">
            Click on a report to view
          </Typography>

        </Box>
      )}
    </>
  );
};

export default SingleChat;