import React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

/*Reference: RoadsideCoder. "Single and Group Chat Messages in React JS - MERN Stack Chat App with Socket.IO." Youtube. March 5, 2023. https://www.youtube.com/watch?v=cHziFZ7Q58Y&list=PLKhlp2qtUcSZsGkxAdgnPcHioRr-4guZf&index=15*/
const ChatLoading = () => {
  return (
    <Stack spacing={2}>
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
    </Stack>
  );
};

export default ChatLoading;
