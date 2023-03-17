/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 10;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 10;
  else return "auto";
};

export const getSender = (loggedUser, users) =>{
  if (loggedUser === "admin")
    return users[0].name === "admin" ? users[1].name: users[0].name
  return "admin"
};


export const GetSender2 = (loggedUser, users) =>{
  // if (loggedUser === "admin")
  //   return users[0].name === "admin" ? users[1].name: users[0].name
  // return "admin"
  return users[0]._id=== loggedUser._id? users[1]._id: users[0]._id
};


export const GetReceiver2 = (loggedUser, users) =>{
  // if (loggedUser === "admin")
  //   return users[0].name === "admin" ? users[1].name: users[0].name
  // return "admin"
  return users[0]._id=== loggedUser._id? users[0]._id: users[1]._id
};

