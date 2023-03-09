import React, {useState, useEffect} from 'react'
import { ChatState } from '../Context/ChatProvider';
import axios from "axios";
import Box from '@mui/material/Box';
import ChatLoading from './ChatLoading';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getSender } from "../config/ChatLogics";

const MyChats = () => {
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const { selectedChat, setSelectedChat, chats,setChats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get("http://localhost:4000/api/report", config);
      setChats(data);
    } catch (error) {
      alert("Failed to Fetch Data");
      return;
    }
  };

  useEffect(() => {
    fetchChats();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      display={{ xs: selectedChat ? 'none' : 'flex', md: 'flex' }}
      flexDirection="column"
      alignItems="center"
      padding={3}
      bgcolor="white"
      width={{ xs: '100%', md: '31%' }}
      borderRadius={12}
      border={1}
    >

    <Box
      pb={3}
      px={3}
      fontSize={{ base: "30px", md: "24px" }}
      fontFamily="Work sans"
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      My Chats
    </Box>
      <Box
        display="flex"
        flexDirection="column"
        pb={3}
        px={3}
        width="100%"
        height="100%"
        borderRadius={10}
        overflowY = "hidden"
      >
        {chats ? (
          <Stack overflowY = "scroll" spacing={2}>
            {chats.map((chat) => (
              <Box
                onClick={()=> {setSelectedChat(chat);}}
                cursor= "pointer"
                backgroundColor = {selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius={10}
                key={chat._id}
              >
                 <Typography fontSize="xs">
                 { chat.users[0]} 
                </Typography>
                {chat.lastestConversation && (
                  <Typography fontSize="xs">
                    <b> Response: </b>
                    {chat.lastestConversation.content.length > 50
                      ? chat.lastestConversation.content.substring(0, 51) + "..."
                      : chat.lastestConversation.content}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
  
        ) : <ChatLoading/> }
      </Box>
    </Box>
  )
}

export default MyChats;