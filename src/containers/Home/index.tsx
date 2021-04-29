import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Box, Heading } from '@chakra-ui/react';
import { goTo } from 'react-chrome-extension-router';
import { Setting } from '../Setting';

export const Home = observer(() => {
  return (
    <Box>
      <Heading>Home</Heading>
      <Button onClick={() => goTo(Setting)}> Go Setting</Button>
    </Box>
  );
});
