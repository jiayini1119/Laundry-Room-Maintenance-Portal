import Box from '@mui/material/Box';
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

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
        borderWidth: "1px",
      }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
