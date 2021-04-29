import { ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../lib/theme';
import { Router } from 'react-chrome-extension-router';
import { Header } from '../../component/Header';
import { Home } from '../../containers/Home';

const Options = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <Container maxW="7xl" p="4">
        <Router>
          <Home />
        </Router>
      </Container>
    </ChakraProvider>
  );
};

export default Options;
