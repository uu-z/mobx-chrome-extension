import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Container, Heading } from '@chakra-ui/react';
import { HomePage } from './Home';
import { goTo } from 'react-chrome-extension-router';

export const SettingPage = observer(() => {
  return (
    <Container minW="400px" minH="500px">
      <Heading>Setting</Heading>
      <Button onClick={() => goTo(HomePage)}> Go Home</Button>
    </Container>
  );
});
