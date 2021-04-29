import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Container, Heading } from '@chakra-ui/react';
import { goTo } from 'react-chrome-extension-router';
import { SettingPage } from './Setting';

export const HomePage = observer(() => {
  return (
    <Container minW="400px" minH="500px">
      <Heading>Home</Heading>
      <Button onClick={() => goTo(SettingPage)}> Go Setting</Button>
    </Container>
  );
});
