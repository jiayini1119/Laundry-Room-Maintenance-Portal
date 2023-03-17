import React, {useState, useEffect, useRef} from 'react'
import { ChatState } from '../Context/ChatProvider';
import axios from "axios";
import Box from '@mui/material/Box';
import ChatLoading from './ChatLoading';
import Typography from '@mui/material/Typography';
import { getSender } from "../config/ChatLogics";
import ScrollableFeed from "react-scrollable-feed"

/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
const MyChats = () => {
  const containerRef = useRef(null);
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
      bgcolor="#e8f4fd"
      width={{ xs: '80%', md: '31%' }}
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
      Report from Students
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
          // <Stack overflowY = "scroll" spacing={2}>
          <ScrollableFeed>
            <div
            ref={containerRef}
            style={{
              maxHeight: "80vh", 
              overflowY: "scroll",
              scrollPaddingBlock: "2px",
              marginBottom: "2px",       
            }}>
            {chats.map((chat) => (
              <Box
                onClick={()=> {setSelectedChat(chat);}}
                cursor= "pointer"
                backgroundColor = {selectedChat === chat ? "#ffc107" : "#5393ff"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius={10}
                key={chat._id}
                marginBottom={2}
              >
                 <Typography fontSize="xs">
                  Click to access a message from{' '}
                  {getSender(id, chat.users)}
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
            </div>
            </ScrollableFeed>
        
  
        ) : <ChatLoading/> }
      </Box>
    </Box>
  )
}

export default MyChats;