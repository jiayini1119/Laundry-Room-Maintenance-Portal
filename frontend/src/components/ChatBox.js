import Box from '@mui/material/Box';
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
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
        borderWidth: "2px",
        borderColor: "#FFD100"
      }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
  }

export default Chatbox;
