import React from 'react'
import ScrollableFeed from "react-scrollable-feed"
import { isSameSenderMargin, isSameUser } from '../config/ChatLogics'

const ScrollableChat = ({ messages }) => {
  const id = localStorage.getItem('id')
  return (
    <ScrollableFeed>
      {messages && messages.map((m,i)=>
        <>
        <div style={{display: "flex"}} key={m._id}>
          <span
              style={{
                backgroundColor: `${
                  m.sender._id === id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, id),
                marginTop: isSameUser(messages, m, i, id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
        </div>
        </>
        )}
    </ScrollableFeed>
  )
}

export default ScrollableChat