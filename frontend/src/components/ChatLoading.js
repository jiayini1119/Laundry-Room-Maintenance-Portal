import React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

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
