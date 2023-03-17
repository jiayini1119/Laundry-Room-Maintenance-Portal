import React, { useEffect, useRef } from "react";
import ScrollableFeed from "react-scrollable-feed"
import { isSameSenderMargin } from "../config/ChatLogics"
import { ChatState } from "../Context/ChatProvider";

/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
const ScrollableChat = ({ messages }) => {
  const id = localStorage.getItem('fullID');
  const email = localStorage.getItem('email');
  const containerRef = useRef(null);
  const { selectedChat, setSelectedChat} = ChatState();

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);
  
  return (
    <ScrollableFeed>
      <div
        ref={containerRef}
        style={{
          maxHeight: "60vh", 
          overflowY: "auto",
        }}
      >
      {messages && messages.filter(m => {
        if (email !== 'admin@admin.com') {
          return true;
        } else {
          const mId = m.sender._id;
          return mId === selectedChat.users[0]._id || mId === selectedChat.users[1]._id;
        }
      }).map((m,i)=> {
        return ( 
          <>
        <div style={{display: "flex", height: "30px"}} key={m._id}>
          <span
              style={{
                backgroundColor: `${
                  m.sender._id === id ? "#FFD100" : "#2774AE"
                }`,
                display: "block",
                borderRadius: "20px",
                padding: "5px 15px",
                height: "17px",
                maxWidth: "75%",
                marginLeft: isSameSenderMargin(messages, m, i, id),   
              }}
            >
              {m.content}
            </span>
        </div>
        </>
        )
      }
        )}
        </div>
    </ScrollableFeed>
  )
}

export default ScrollableChat