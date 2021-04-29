import { Button, ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../lib/theme';
import { HomePage } from './pages/Home';
import { Router } from 'react-chrome-extension-router';
import { Header } from '../../component/Header';

const Popup = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <Router>
        <HomePage />
      </Router>
    </ChakraProvider>
  );
};

export default Popup;
