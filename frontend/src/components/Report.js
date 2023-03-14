
import { ChatState } from "../Context/ChatProvider";
import GoBack from "./GoBack";
import Box from '@mui/material/Box';
import MyChats from "./MyChats";
import  ChatBox  from "./ChatBox";
import "./HeaderFeatures.css";


const Report = () => {
  const id = localStorage.getItem('id')
  const email = localStorage.getItem('email')
  const {chats} = ChatState();
  if (email === "admin@admin.com")
  return (
    <div className='reportheader'>
      <h1 className="reporttitle">
        {"Students' Report Messages"}, {id}
      </h1>
      <Box
        sx={{
          width: '100%',
          height: '91.5vh',
          display: 'flex',
          justifyContent: 'space-between', 
          flexDirection: 'row',
          padding: '10px',
        }}
      >
        <MyChats/> 
        <ChatBox/>
      </Box>
      <GoBack />
    </div>
  );
  else{
    return (
      <div className='reportheader'>
        <h1 className="hometitle">
          {"Report the Problem Here"}, {id}
        </h1>
        <hr/>
        <Box 
          sx={{
            width: '100%',
            height: '91.5vh',
            // display: 'flex',
            marginLeft: '13%'
          }}
        >
          <ChatBox/>
        </Box>
        <GoBack />
      </div>
    );
  }
};

export default Report;

