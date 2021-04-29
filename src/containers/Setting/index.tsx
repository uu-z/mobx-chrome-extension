import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Box, Heading } from '@chakra-ui/react';
import { Home } from '../Home';
import { goTo } from 'react-chrome-extension-router';

export const Setting = observer(() => {
  return (
    <Box>
      <Heading>Setting</Heading>
      <Button onClick={() => goTo(Home)}> Go Home</Button>
    </Box>
  );
});
