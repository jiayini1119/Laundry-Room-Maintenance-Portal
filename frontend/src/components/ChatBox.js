import Box from '@mui/material/Box';
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
import SingleChatStudent from './SingleChatStudent';

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  const email = localStorage.getItem('email')

  if (email === "admin@admin.com"){
    return (
      <Box
        sx={{
          display: { base: selectedChat ? "flex" : "none", md: "flex" },
          alignItems: "center",
          flexDirection: "column",
          p: 3,
          bg: "white",
          width: { base: "100%", md: "68%" },
          borderRadius: "lg",
          borderWidth: "1px",
        }}
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    );
  }
  else{
    return (
      <Box
        sx={{
          display: { base: selectedChat ? "flex" : "none", md: "flex" },
          alignItems: "center",
          flexDirection: "column",
          p: 3,
          bg: "white",
          width: { base: "100%", md: "68%" },
          borderRadius: "lg",
          borderWidth: "1px",
        }}
      >
        <SingleChatStudent fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    );
  }
};

export default Chatbox;
