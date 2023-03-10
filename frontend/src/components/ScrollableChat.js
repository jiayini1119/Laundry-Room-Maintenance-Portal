import React, { useEffect, useRef } from "react";
import ScrollableFeed from "react-scrollable-feed"
import { isSameSenderMargin } from "../config/ChatLogics"

const ScrollableChat = ({ messages }) => {
  const id = localStorage.getItem('fullID');

  const containerRef = useRef(null);
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
      {messages && messages.map((m,i)=>
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
        )}
        </div>
    </ScrollableFeed>
  )
}

export default ScrollableChat